import React from "react";
import REACTDOM from "react-dom";
import '../App.css';

class MyForm extends React.Component {
  constructor() {
    super();
    this.state = {
        name:'',
        description:'',
        picture:'',
        team:'',
        school:'',
        tech:'',
        college:'',
        links:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();


    this.setState({
        name:event.target.projectName.value,
        description:event.target.projectDescription.value,
        picture:event.target.projectPicture.files[0],
        team:'',
        school:event.target.projectSchool.value,
        tech:event.target.projectTech.value,
        college:event.target.projectCollege.value,
        links:''
    })
    console.log(this.state)
    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // });
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


        <label htmlFor="projectTeam">Project Team</label>
        <input id="projectTeam" name="projectTeam" type="text" />
    	<br></br>


        <label htmlFor="projectLinks">Project Links</label>
        <input id="projectLinks" name="projectLinks" type="text" />
    	<br></br>

    	<button>Send data</button>
    </form>
    );
  }
}
export default MyForm;
