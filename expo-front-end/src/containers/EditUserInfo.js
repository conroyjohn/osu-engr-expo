import React from "react";
import REACTDOM from "react-dom";
import { API, Auth } from "aws-amplify";
import '../App.css';

class MyForm extends React.Component {
  constructor() {
    super();
    //initialize the state
    this.state = {
        isLoading:true,
        email:'',
        display_name:'',
        description:'',
        user_id:'',
        links:[{ name : "",link:"" }]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
      try {
          const response = await Auth.currentAuthenticatedUser();
          console.log(response)

          this.setState({
                  email:response['attributes']['email'],
                  display_name:response['attributes']['display_name'],
                  description:response['attributes']['description'],
                  user_id:response['attributes']['sub']
          })

          if(typeof response['attributes']['links']!== "undefined") {
              this.setState({
                      links:response['attributes']['links']
              })
          }

          this.setState({
                  isLoading:false
          })

      } catch (error) {
          console.error(error);
      }
  }





  //Following 4 funtions for handling input reference links
  handleAddLink = () => {
      this.setState({
          links: this.state.links.concat([{ name : "",link:"" }])
      });
  }


  handleRemoveLink = idx => () =>{
      this.setState({
          links: this.state.links.filter((s, sidx) => idx !== sidx)
      });
  }

  handleLinkDescChange = idx => evt => {
      // console.log(evt.target)
    const newLinks = this.state.links.map((link, sidx) => {
      if (idx !== sidx) return link;
      return { ...link, name: evt.target.value };
    });

    this.setState({ links: newLinks });
  };


  handleLinkWebsiteChange = idx => evt => {
      // console.log(evt.target)
    const newLinks = this.state.links.map((link, sidx) => {
      if (idx !== sidx) return link;
      return { ...link, link: evt.target.value };
    });

    this.setState({ links: newLinks });
  };

  handleSubmit(event) {
    event.preventDefault();


    let postData = {
        'email':this.state.email.toString(),
        'display_name':event.target.userDisplayName.value.toString(),
        'description':event.target.userDescription.value.toString(),
        'user_id':this.state.user_id.toString(),
        'links':this.state.links
    }


    console.log(postData)



    fetch('https://v5yyja3u9i.execute-api.us-east-1.amazonaws.com/v0/update-user-details', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData)
    }).then((response) =>
    {
        alert("Thanks for updating your data!!")
    });

   }

  render() {
      if (this.state.isLoading) {
        return <div>Loading...</div>;
      } else
      {
        return (
          <form id="subform" onSubmit={this.handleSubmit}>

                <p>You are currently logged in as: <strong>{this.state.email}</strong>. Edit your details:</p>
                <br></br>
                <br></br>


                <label htmlFor="userDisplayName"> Display Name </label>
            	<input id="userDisplayName"
                            placeholder="Enter a name for the user that will display on their homepage"
                            defaultValue={this.state.display_name}/>
            	<br></br>

                <label htmlFor="userDescription">Description</label>
                <textarea id="userDescription" name="userDescription" type="text" defaultValue={this.state.description}></textarea>
            	<br></br>


                <label>Reference links for the user</label>
                <br></br>

                {this.state.links.map((link, idx) => (
                  <div key={idx+1}>
                    <input
                      type="text"
                      placeholder={`Link #${idx + 1} description`}
                      value={link.name}
                      onChange={this.handleLinkDescChange(idx)}
                    />
                    <input
                      type="text"
                      placeholder={`Link #${idx + 1} website`}
                      value={link.link}
                      onChange={this.handleLinkWebsiteChange(idx)}
                    />

                    <button
                      type="button"
                      onClick={this.handleRemoveLink(idx)}
                      className="small">
                      -
                    </button>

                  </div>
                ))}

                <button
                  type="button"
                  onClick={this.handleAddLink}
                  className="small"
                >
                  Add Link
                </button>

                <br></br>


            	<button>Send data</button>
            </form>
        );
    }
  }
}
export default MyForm;

//
//
//
//
// import React, { Component } from "react";
// import "../App.css";
// import TableFilter from "react-table-filter";
// import { Auth } from "aws-amplify";
//
// export default class Table extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true,
//       data: {}
//     };
//   }
//
//   renderTableHeader(columnHeads) {
//     return columnHeads.map((key, index) => {
//        return <th key={index}>{key.toUpperCase()}</th>;
//     });
//   }
//
//   renderTableData() {
//
//     return this.state.data.map((projects, key) => {
//       return (
//         <tr key={key}>
//           <td>{projects.display_name}</td>
//           <td>{projects.email}</td>
//           <td>{projects.description}</td>
//         </tr>
//       );
//     });
//   }
//
// 	async componentDidMount() {
// 		try {
// 			const response = await fetch('https://v5yyja3u9i.execute-api.us-east-1.amazonaws.com/v0/get-all-users');
// 			let responseJson = await response.json();
// 			this.setState(
// 				{
// 					isLoading: false,
// 					data: responseJson
// 				},
// 				function() {}
// 			);
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	}
//
//   render() {
//
//     const columnHeads = [
//     'name',
//     'email',
//     'description'
//   ];
//
//
//
//
//   if (this.state.isLoading) {
//     return <div>Loading...</div>;
//   } else {
//
//
//     return (
//       <div>
//         <h1 id="title">Expo Members</h1>
//         <table id="users">
//           <thead>
//           <tr>{this.renderTableHeader(columnHeads)}</tr>
//           </thead>
//           <tbody>
//             {this.renderTableData()}
//           </tbody>
//         </table>
//       </div>
//     );
//
//
//   }
// }
// }
