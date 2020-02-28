import React from 'react';
import expo from '../Images/trade-show-floor-plan.png'; 
import Image from'react-image-resizer';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import ReactTooltip from 'react-tooltip';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Tooltip from '@material-ui/core/Tooltip';


{/*This is the class that will create the tooltip Divs. Setting the positions based on percentages will allow the divs to show up in the same relative position on the Map regardless of where the page is opened up on (web vs. phone)
Each Component has an id passed into it that can be used to reference the booth.
There are two components MyComponent and Mycomponenet Left. The only difference is the position of the tooltip but the Lambda function must go in both of them */}
class MyComponent extends React.Component{

  render(){
    return (
      <div style={{ position:"absolute", top: this.props.t, left:this.props.l, width:this.props.w, height:this.props.h }}> 
        <button style={{ 
          background: 'transparent', 
          outline: 'none', border: 'none', height: '100%', width: '100%'}} ref={ref => this.fooRef = ref} 
          data-tip='Team Name: Expose<br /> Project Name: Saving the word from Cyber Attack' 
          data-place= 'right' 
          data-type= 'info' 
          text-align= 'left' 
          data-multiline ='true' 
          onClick={() => {ReactTooltip.show(this.fooRef) }} 
          data-event='click'> 
        </button>
      <ReactTooltip />
      </div>);
  }
}

class MyComponentLeft extends React.Component{

  render(){
    return (
      <div style={{ position:"absolute", top: this.props.t, left:this.props.l, width:this.props.w, height:this.props.h }}> 
        <button style={{ 
          background: 'transparent', 
          outline: 'none', border: 'none', height: '100%', width: '100%'}} ref={ref => this.fooRef = ref} 
          data-tip='Team Name: Expose<br /> Project Name: Saving the word from Cyber Attack' 
          data-place= 'left' 
          data-type= 'info' 
          text-align= 'left' 
          data-multiline ='true' 
          onClick={() => {ReactTooltip.show(this.fooRef) }} 
          data-event='click'> 
        </button>
      <ReactTooltip />
      </div>);
  }
}
class Map extends React.Component{

	constructor(props) {
	  super(props);
	  this.state ={
	    open: false
	  };
        }

render(){
  return(
  <div style={{ 
          backgroundImage: "url(/trade-show-floor-plan.png)",
                height:"500px",
          width:"100%",
          backgroundposition: "center",
          alignItems:'center',
          justifyContent: 'center',
          position: "relative",
          backgroundRepeat: "no-repeat" }} >

{/*top row of Map*/}
  {/*Div for Booth 100*/}
  <MyComponent t="18%" l="7.25%" w="4%" h="5%" id="100"/>
  {/*Div for Booth 101*/}
  <MyComponent t="18%" l="11.75%" w="4%" h="5%" id="101" />
  {/*Div for Booth 102*/}
  <MyComponent t="18%" l="16.5%" w="4%" h="5%" id="102" />
  {/*Div for Booth 103*/}
  <MyComponent t="18%" l="21.25%" w="4%" h="5%" id="103"/>
  {/*Div for Booth 104*/}
   <MyComponentLeft t="18%" l="25.75%" w="4%" h="5%" id="104" /> 
  {/*Div for Booth 105*/}
   <MyComponentLeft t="18%" l="30.5%" w="4%" h="5%" id="105"/>  
  {/*Div for Booth 106*/}
   <MyComponentLeft t="18%" l="35.0%" w="4%" h="5%" id="106"/> 
  {/*Div for Booth 107*/}
   <MyComponentLeft t="18%" l="39.75%" w="4%" h="5%" id="107"/> 
  {/*Div for Booth 108*/}
   <MyComponentLeft t="18%" l="44.5%" w="4%" h="5%" id="108"/> 

{/*Second row of Map*/} 
  {/*Div for Booth 109*/}
   <MyComponent t="30%" l="7.5%" w="4%" h="10%" id="109"/> 
  {/*Div for Booth 113*/}
   <MyComponent t="30%" l="12.25%" w="4%" h="10%" id="113"/> 
  {/*Div for Booth 116*/}
   <MyComponent t="30%" l="21%" w="4%" h="24%" id="116"/> 
  {/*Div for Booth 118*/}
   <MyComponentLeft t="30%" l="29.0%" w="4%" h="10%" id="118"/> 
  {/*Div for Booth 122*/}
   <MyComponentLeft t="30%" l="34.0%" w="4%" h="10%" id="122"/> 
   {/*Div for Booth 126*/}
   <MyComponentLeft t="30%" l="42.25%" w="4%" h="10%" id="126"/> 
     {/*Div for Booth 129*/}
   <MyComponentLeft t="30%" l="47.%" w="4%" h="10%" id="129"/>

{/*Third row of Map*/} 
  {/*Div for Booth 110*/}
   <MyComponent t="43.25%" l="7.5%" w="4%" h="10%" id="110"/> 
  {/*Div for Booth 114*/}
   <MyComponent t="43.25%" l="12.25%" w="4%" h="10%" id="114"/> 
   {/*Div for Booth 119*/} 
   <MyComponentLeft t="43.75%" l="29.0%" w="4%" h="10%" id="119"/> 
  {/*Div for Booth 123*/}
   <MyComponentLeft t="43.75%" l="34.0%" w="4%" h="10%" id="123"/> 
   {/*Div for Booth 127*/}
   <MyComponentLeft t="43.75%" l="42.25%" w="4%" h="10%" id="127"/> 
     {/*Div for Booth 130*/}
   <MyComponentLeft t="43.75%" l="47.%" w="4%" h="10%" id="130"/>
{/*Fourth row of Maps*/}
   {/*Div for Booth 111*/}
   <MyComponent t="56.5%" l="7.5%" w="4%" h="10%" id="111"/> 
  {/*Div for Booth 115*/}
   <MyComponent t="56.5%" l="12.25%" w="4%" h="25%" id="115"/> 
   {/*Div for Booth 117*/}
   <MyComponent t="56.5%" l="21%" w="4%" h="24%" id="117"/> 
   {/*Div for Booth 120*/} 
   <MyComponentLeft t="56.5%" l="29.0%" w="4%" h="10%" id="120"/> 
  {/*Div for Booth 124*/}
   <MyComponentLeft t="56.5%" l="34.0%" w="4%" h="10%" id="124"/>  
   {/*Div for Booth 128*/}
   <MyComponentLeft t="56.5%" l="42.25%" w="4%" h="24%" id="128"/>  
   {/*Div for Booth 131*/}
   <MyComponentLeft t="56.5%" l="47.0%" w="4%" h="10%" id="131"/>  
{/*FInal row of things*/}
 {/*Div for Booth 112*/}
   <MyComponent t="70.25%" l="7.5%" w="4%" h="10%" id="112"/>
  {/*Div for Booth 121*/}
   <MyComponentLeft t="70.25%" l="29%" w="4%" h="10%" id="121"/>
  {/*Div for Booth 125*/}
   <MyComponentLeft t="70.25%" l="34%" w="4%" h="10%" id="125"/>
    {/*Div for Booth 132*/}
   <MyComponentLeft t="70.25%" l="47%" w="4%" h="10%" id="132"/>
  </div>
);
}
}


export default Map;
