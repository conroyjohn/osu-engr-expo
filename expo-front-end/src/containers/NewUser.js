import React from "react";
import REACTDOM from "react-dom";
import { API } from "aws-amplify";
import '../App.css';

class MyForm extends React.Component {
  constructor() {
    super();
    //initialize the state
    this.state = {
        name:'',
        description:'',
        picture:'',
        school:'',
        tech:'',
        college:'',
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
        'name':event.target.projectName.value.toString(),
        'description':event.target.projectDescription.value.toString(),
        'picture':event.target.projectPicture.files[0],
        'school':event.target.projectSchool.value.toString(),
        'tech':event.target.projectTech.value.toString(),
        'college':event.target.projectCollege.value.toString(),
        'links':inputLinks
    }



    fetch('https://v5yyja3u9i.execute-api.us-east-1.amazonaws.com/v0/create-new-project', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData)
    }).then((response) =>
    {
        alert("Thanks for submitting a project!")
    });

  }

  render() {
    return (
      <form id="subform" onSubmit={this.handleSubmit}>
        <label htmlFor="projectName">Project Name</label>
        <input id="projectName" name="projectName" type="text" />
    	<br></br>

        <label htmlFor="projectDescription"> Description: </label>
    	<textarea id="projectDescription"
                    placeholder="Enter in a description of the project here"></textarea>
    	<br></br>

        <label>Upload a picture for your project</label>
    	<input id="projectPicture" type="file" name="file"/>
        <br></br>


        <label htmlFor="projectCollege">Project College</label>
        <input id="projectCollege" name="projectCollege" type="text" />
    	<br></br>

        <label htmlFor="projectSchool">Project School</label>
        <input id="projectSchool" name="projectSchool" type="text" />
    	<br></br>

        <label htmlFor="projectTech">Project Technology</label>
        <input id="projectTech" name="projectTech" type="text" />
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
