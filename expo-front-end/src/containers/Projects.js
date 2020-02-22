import React, { Component } from "react";
import "../App.css";
import TableFilter from "react-table-filter";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: {}
    };
  }
  
  renderTableHeader(columnHeads) {
    return columnHeads.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  renderTableData() {
    return this.state.data.map((projects, key) => {
      return (
        <tr key={key}>
          <td>{projects.name}</td>
          <td>{projects.school}</td>
          <td>{projects.college}</td>
          <td>{projects.description}</td>
        </tr>
      );
    });
  }
  
	async componentDidMount() {
		try {
			const response = await fetch('https://v5yyja3u9i.execute-api.us-east-1.amazonaws.com/v0/get-all-projects');
			let responseJson = await response.json();
			this.setState(
				{
					isLoading: false,
					data: responseJson
				},
				function() {}
			);
		} catch (error) {
			console.error(error);
		}
	}

  render() {

    const columnHeads = [
    'name',
    'school',
    'college',
    'description',
  ];

  if (this.state.isLoading) {
    return <div>Loading...</div>;
  } else { 

    return (
      <div>
        <h1 id="title">Projects</h1>
        <table id="projects">
          <thead>
          <tr>{this.renderTableHeader(columnHeads)}</tr>
          </thead>
          <tbody>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}
}

// Daniel Lindsay - Referenced this for the API code: https://medium.com/serverlessguru/serverless-api-with-reactjs-6fa297ac8a27
// Daniel Lindsay - Referenced this for table code: https://stackoverflow.com/questions/47697863/display-data-json-to-table-in-react
