import React, { Component} from "react";
import '../App.css';
import TableFilter from 'react-table-filter';


class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [
        { Team: 'Alpha', Project: 'Saving the Planet', Department: 'Environmental Science', Booth: 41}
      ]
   }
  }
  renderTableHeader(){
    let header = Object.keys(this.state.projects[0])
    return header.map((key, index) => {
      return <th key = {index}>{key.toUpperCase()}</th>
    })
  }

  renderTableData() {
      return this.state.projects.map((projects, index)=> {
        const { Team, Project, Department, Booth } = projects
        return (
	  <tr key={Team}>
          <td>{Team}</td>
          <td>{Project}</td>
	  <td>{Department}</td>
          <td>{Booth}</td>
          </tr>
	)
    })
  }


  render () {
    return (
       <div>
          <h1 id = 'title'>Projects</h1>
          <table id ='projects'>
 	    <tbody>
                <tr>{this.renderTableHeader()}</tr>
		{this.renderTableData()}
	    </tbody>
	  </table>
	</div>
    )
	}
      
}
export default Table

