// import React, { Component } from "react";
// import "../App.css";
// import TableFilter from "react-table-filter";
// import Pagination from "@material-ui/lab/Pagination";
// import ExpansionPanel from "@material-ui/core/ExpansionPanel";
// import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
// import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
// import Typography from "@material-ui/core/Typography";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import Container from "@material-ui/core/Container";
// import Box from "@material-ui/core/Box";
// import Link from "@material-ui/core/Link";
// import AvatarImg from "../Images/avatar.jpg";
// import Avatar from "@material-ui/core/Avatar";
// import { sizing } from "@material-ui/system";
// import styled from "styled-components";
// import { Link as RouterLink } from "react-router-dom";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';

// export default class Table extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true,
//       clickedYet: false,
//       data: {},
//       project: {},

//       name:'',
//       description:'',
//       picture:'',
//       team:[{ email : "" }],
//       school:'',
//       tech:'',
//       college:'',
//       links:[{ name : "",link:"" }]
//     }
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   //Following 4 funtions for handling team input
//   handleAddTeamMember = () => {
//     this.setState({
//         team: this.state.team.concat([{ email: "" }])
//     });
// }


// handleRemoveTeamMember = idx => () =>{
//     this.setState({
//         team: this.state.team.filter((s, sidx) => idx !== sidx)
//     });
// }

// handleTeamMemberChange = idx => evt => {
//   const newTeamMembers = this.state.team.map((teamMember, sidx) => {
//     if (idx !== sidx) return teamMember;
//     return { ...teamMember, email: evt.target.value };
//   });

//   this.setState({ team: newTeamMembers });
// };



// //Following 4 funtions for handling input reference links
// handleAddLink = () => {
//     this.setState({
//         links: this.state.links.concat([{ name : "",link:"" }])
//     });
// }


// handleRemoveLink = idx => () =>{
//     this.setState({
//         links: this.state.links.filter((s, sidx) => idx !== sidx)
//     });
// }

// handleLinkDescChange = idx => evt => {
//     // console.log(evt.target)
//   const newLinks = this.state.links.map((link, sidx) => {
//     if (idx !== sidx) return link;
//     return { ...link, name: evt.target.value };
//   });

//   this.setState({ links: newLinks });
// };


// handleLinkWebsiteChange = idx => evt => {
//     // console.log(evt.target)
//   const newLinks = this.state.links.map((link, sidx) => {
//     if (idx !== sidx) return link;
//     return { ...link, link: evt.target.value };
//   });

//   this.setState({ links: newLinks });
// };

// handleSubmit(event) {
//   event.preventDefault();

//   let team = this.state.team;
//   let inputLinks = this.state.links;

//   let postData = {
//       'name':event.target.projectName.value.toString(),
//       'description':event.target.projectDescription.value.toString(),
//       'picture':event.target.projectPicture.files[0],
//       'team':team,
//       'school':event.target.projectSchool.value.toString(),
//       'tech':event.target.projectTech.value.toString(),
//       'college':event.target.projectCollege.value.toString(),
//       'links':inputLinks
//   }



//   fetch('https://v5yyja3u9i.execute-api.us-east-1.amazonaws.com/v0/create-new-project', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(postData)
//   }).then((response) =>
//   {
//       alert("Thanks for editing your project!")
//   });

// }

//   showProject(input) {
//     this.setState(
//       {
//         clickedYet: true,
//         project: input,
//         name:input.name,
//         description:input.description,
//         picture:input.picture,
//         team:input.team,
//         school:input.school,
//         tech:input.tech,
//         college:input.college,
//         links:input.links
//       },
//       function() {}
//     );
//   }

//   renderDropdown() {
//     return this.state.data.map((projects, key) => {
//       return (
//           <Dropdown.Item key={key} onClick={() => { this.showProject(projects) }}>{projects.name}</Dropdown.Item>
//       );

//     });
//   }

// 	async componentDidMount() {
// 		try {
// 			const response = await fetch('https://v5yyja3u9i.execute-api.us-east-1.amazonaws.com/v0/get-all-projects');
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

//   render() {

//   if (this.state.isLoading) {
//     return <div>Loading...</div>;
//   }

//   else if (this.state.clickedYet === false) {
//     return (
//       <div>
//         <DropdownButton id="dropdown-basic-button" title="Projects">
//           {this.renderDropdown()}
//         </DropdownButton>
//       </div>
//     );
//   }

//   else{
//     return (
//       <form id="subform" onSubmit={this.handleSubmit}>
//         <label htmlFor="projectName">Project Name</label>
//         <input id="projectName" name="projectName" type="text" defaultValue={this.state.name}/>
//     	<br></br>

//         <label htmlFor="projectDescription"> Description: </label>
//     	<textarea id="projectDescription"
//                     placeholder="Enter in a description of the project here" defaultValue={this.state.description}></textarea>
//     	<br></br>

//         <label>Upload a picture for your project</label>
//     	<input id="projectPicture" type="file" name="file"/>
//         <br></br>


//         <label htmlFor="projectCollege">Project College</label>
//         <input id="projectCollege" name="projectCollege" type="text" defaultValue={this.state.college}/>
//     	<br></br>

//         <label htmlFor="projectSchool">Project School</label>
//         <input id="projectSchool" name="projectSchool" type="text" defaultValue={this.state.school}/>
//     	<br></br>

//         <label htmlFor="projectTech">Project Technology</label>
//         <input id="projectTech" name="projectTech" type="text" defaultValue={this.state.tech}/>
//     	<br></br>


//         <label>Team Members</label>
//         <br></br>

//         {this.state.team.map((teamMember, idx) => (
//           <div key={idx+1}>
//             <input
//               type="email"
//               placeholder={`Team member #${idx + 1} name`}
//               value={teamMember.email}
//               onChange={this.handleTeamMemberChange(idx)}
//             />

//             <button
//               type="button"
//               onClick={this.handleRemoveTeamMember(idx)}
//               className="small">
//               -
//             </button>

//           </div>
//         ))}

//         <button
//           type="button"
//           onClick={this.handleAddTeamMember}
//           className="small"
//         >
//           Add Team Member
//         </button>

//         <br></br>

//         <label>Reference links for the project</label>
//         <br></br>

//         {this.state.links.map((link, idx) => (
//           <div key={idx+1}>
//             <input
//               type="text"
//               placeholder={`Link #${idx + 1} description`}
//               value={link.name}
//               onChange={this.handleLinkDescChange(idx)}
//             />
//             <input
//               type="text"
//               placeholder={`Link #${idx + 1} website`}
//               value={link.link}
//               onChange={this.handleLinkWebsiteChange(idx)}
//             />

//             <button
//               type="button"
//               onClick={this.handleRemoveLink(idx)}
//               className="small">
//               -
//             </button>

//           </div>
//         ))}

//         <button
//           type="button"
//           onClick={this.handleAddLink}
//           className="small"
//         >
//           Add Link
//         </button>

//         <br></br>


//     	<button>Send data</button>
//     </form>
//     );
//   }
//   }
// }
