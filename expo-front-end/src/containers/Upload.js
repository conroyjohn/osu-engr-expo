import React from "react";
import REACTDOM from "react-dom";
import '../App.css';

class MyForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(event.target.files[0])
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <form id="subform" onSubmit={this.handleSubmit}>
        <label htmlFor="username">Enter username</label>
        <input id="username" name="username" type="text" />
	<br></br>
	<label htmlFor="onid">Enter ONID</label>
	<input id="oonid" name="onid" type ="text" />
	<br></br>
        <label htmlFor="email">Enter your email</label>
        <input id="email" name="email" type="email" />
	<br></br>
        <label htmlFor="projectname">Enter Project name</label>
        <input id="projectname" name="projectname" type="text" />
	<br></br>
	<label htmlFor="description"> Description: </label>
	<textarea>Enter in a description of the project here</textarea>
	<br></br>
	<label>Upload Your File</label>
	<input type="file" name="file" onChange={this.handleSubmit}/>
        <br></br>
	 <button>Send data</button>
      </form>
    );
  }
}
export default MyForm;
