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
          <td>{projects.display_name}</td>
          <td>{projects.email}</td>
          <td>{projects.description}</td>
        </tr>
      );
    });
  }

	async componentDidMount() {
		try {
			const response = await fetch('https://v5yyja3u9i.execute-api.us-east-1.amazonaws.com/v0/get-all-users');
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
    'email',
    'description'
  ];




  if (this.state.isLoading) {
    return <div>Loading...</div>;
  } else {



    return (
      <div id="entireContainer">
        <span id="tableContainer">
            <h1 id="title">Expo Members</h1>
            <table id="users">
              <thead>
              <tr>{this.renderTableHeader(columnHeads)}</tr>
              </thead>
              <tbody>
                {this.renderTableData()}
              </tbody>
            </table>
        </span>

        <span id="detailsContainer">
                <h1 id="title">Expo Members</h1>
                <table id="users">
                  <thead>
                  <tr>{this.renderTableHeader(columnHeads)}</tr>
                  </thead>
                  <tbody>
                    {this.renderTableData()}
                  </tbody>
                </table>

        </span>
      </div>
    );


  }
}
}
