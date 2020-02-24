import React from "react";
import REACTDOM from "react-dom";
import { API } from "aws-amplify";
import '../App.css';

class MyForm extends React.Component {
  constructor() {
    super();
    //initialize the state
    this.state = {
        email:'',
        display_name:'',
        description:'',
        links:[{ name : "",link:"" }]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
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

    let inputLinks = this.state.links

    let postData = {
        'email':event.target.userEmail.value.toString(),
        'display_name':event.target.userDisplayName.value.toString(),
        'description':event.target.userDescription.value.toString(),
        'links':inputLinks
    }



    fetch('https://v5yyja3u9i.execute-api.us-east-1.amazonaws.com/v0/create-new-user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData)
    }).then((response) =>
    {
        alert("Thanks for submitting adding a user!!")
    });

  }

  render() {
    return (
      <form id="subform" onSubmit={this.handleSubmit}>
        <label htmlFor="userEmail">User email address - this must be unique</label>
        <input id="userEmail" name="userEmail" type="text" />
    	<br></br>

        <label htmlFor="userDisplayName"> Display Name </label>
    	<textarea id="userDisplayName"
                    placeholder="Enter a name for the user that will display on their homepage"></textarea>
    	<br></br>

        <label htmlFor="userDescription">Description</label>
        <input id="userDescription" name="userDescription" type="text" />
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
export default MyForm;
