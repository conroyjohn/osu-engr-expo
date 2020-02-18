import React, { Component } from "react";
import "../App.css";
import TableFilter from "react-table-filter";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      /*projects: [
        {
          Team: "Alpha",
          Project: "Saving the Planet",
          Department: "Environmental Science",
          Booth: 41
        }
      ]*/
    };
  }
  
  /*
  renderTableHeader() {
    let header = Object.keys(this.state.projects[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }
  */
  
  renderTableHeader(columnHeads) {
    return columnHeads.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  renderTableData(projectList) {
    return projectList.map((projects, key) => {
      return (
        <tr key={key}>
          <td>{projects.name}</td>
          <td>{projects.school}</td>
          <td>{projects.college}</td>
          <td>{projects.team}</td>
        </tr>
      );
    });
    
  }
  
  	async getData() {
		try {
       const data = await fetch('https://v5yyja3u9i.execute-api.us-east-1.amazonaws.com/v0/get-all-projects');
       let projectList = data.json();
			this.setState(
				{
					data: projectList
				},
				function() {}
			);
		} catch (error) {
			console.error('Error');
		}
	}

  render() {
    

    const columnHeads = [
    'name',
    'school',
    'college',
    'team',
  ];
    
    return (
      <div>
        <h1 id="title">Projects</h1>
        <table id="projects">
          <thead>
          <tr>{this.renderTableHeader(columnHeads)}</tr>
          </thead>
          <tbody>
            {this.renderTableData(this.state.data)}
          </tbody>
        </table>
      </div>
    );
  }
}

// Daniel Lindsay - Referenced this for the API code: https://medium.com/serverlessguru/serverless-api-with-reactjs-6fa297ac8a27
// Daniel Lindsay - Referenced this for table code: https://stackoverflow.com/questions/47697863/display-data-json-to-table-in-react
