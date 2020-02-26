import React from 'react';
import expo from '../Images/trade-show-floor-plan.png'; 
import Image from'react-image-resizer';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import ReactTooltip from 'react-tooltip';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Tooltip from '@material-ui/core/Tooltip';


/*
var sectionStyle = {
	width: "100%",
	height: "400px"
};
*/

class Map extends React.Component{

	constructor(props) {
	  super(props);
	  this.state ={
	    open: false
	  };
        }

render(){
const handleTooltipClose = () => {
    this.setState({
	open: false
    });
};

  const handleTooltipOpen = () => {
    this.setState({
	open: true
    });
};

return(
 <div style={{ //backgroundImage:`url(require(${expo}))`,
		    backgroundImage: "url(/trade-show-floor-plan.png)",
	            height:"500px",
		    width:"100%",
		    backgroundposition: "center",
		    position: "relative",
		    backgroundRepeat: "no-repeat" }} >
<div style={{ position:"relative", top:"18%", left:"9%"}}> 
<button ref={ref => this.sooRef = ref} 
//When integrating use this section of code:
//use<ReactTooltip id='test' getContent={() => { return null }}/>
data-tip='Team Name: Expose<br /> Project Name: Saving the word from Cyber Attack' data-place= 'right' data-type= 'info' text-align= 'left' data-multiline ='true' onClick={() => {ReactTooltip.show(this.sooRef) }} data-event='click'> </button>
<ReactTooltip />

<div style={{ position:"relative", top:"1%", left:"12.5%", width: '50px', height: '30px'}}> 
<button style={{ background: 'transparent', outline: 'none', border: 'none', height: '100%', width: '100%'}} ref={ref => this.mooRef = ref} 
//When integrating use this section of code:
//use<ReactTooltip id='test' getContent={() => { return null }}/>
data-tip='Team Name: Expose<br /> Project Name: Saving the word from Cyber Attack' data-place= 'right' data-type= 'info' text-align= 'left' data-multiline ='true' onClick={() => {ReactTooltip.show(this.mooRef) }} data-event='click'> </button>
<ReactTooltip />
</div>

</div>
<div style={{ position:"relative", top:"8%", left:"12.25%", width: '50px', height: '30px'}}> 
<button style={{ 
  //background: 'transparent', 
  outline: 'none', border: 'none', height: '100%', width: '100%'}} ref={ref => this.fooRef = ref} 
//When integrating use this section of code:
//use<ReactTooltip id='test' getContent={() => { return null }}/> Delete the string data in data-tip
data-tip='Team Name: Expose<br /> Project Name: Saving the word from Cyber Attack' data-place= 'right' data-type= 'info' text-align= 'left' data-multiline ='true' onClick={() => {ReactTooltip.show(this.fooRef) }} data-event='click'> </button>
<ReactTooltip />
</div>
 {/*Div for Booth 110*/}
    <div style={{ position:"relative", top:"27.5%", left:"7.75%", width: '50px', height: '50px'}}> 
             <button style={{ 
  //background: 'transparent', 
  outline: 'none', border: 'none', height: '100%', width: '100%'}} ref={ref => this.looRef = ref} data-tip='Team Name: Expose<br /> Project Name: Saving the word from Cyber Attack' data-place= 'right' data-type= 'info' text-align= 'left' data-multiline ='true' onClick={() => {ReactTooltip.show(this.looRef) }} data-event='click'> </button>
<ReactTooltip />
    </div>
{/*Div for Booth 109*/}
       <div style={{ position:"relative", top:"4%", left:"7.75%", height:'50px', width:'50px'}}> 
             <button style={{ 
  //background: 'transparent', 
  outline: 'none', border: 'none', height: '100%', width: '100%'}} ref={ref => this.looRef = ref} data-tip='Team Name: Expose<br /> Project Name: Saving the word from Cyber Attack' data-place= 'right' data-type= 'info' text-align= 'left' data-multiline ='true' onClick={() => {ReactTooltip.show(this.looRef) }} data-event='click'> </button>
<ReactTooltip />
    </div>

  {/*Div for Booth 111*/}   
       <div style={{ position:"relative", top:"20%", left:"7.75%", height:'50px', width:'50px'}}> 
             <button style={{ 
  //background: 'transparent', 
  outline: 'none', border: 'none', height: '100%', width: '100%'}} ref={ref => this.booRef = ref} data-tip='Team Name: Expose<br /> Project Name: Saving the word from Cyber Attack' data-place= 'right' data-type= 'info' text-align= 'left' data-multiline ='true' onClick={() => {ReactTooltip.show(this.booRef) }} data-event='click'> </button>
<ReactTooltip />
    </div>

   {/*Div for Booth 112*/}   
       <div style={{ position:"relative", top:"24%", left:"7.75%", height:'50px', width:'50px'}}> 
             <button style={{ 
  //background: 'transparent', 
  outline: 'none', border: 'none', height: '100%', width: '100%'}} ref={ref => this.booRef = ref} data-tip='Team Name: Expose<br /> Project Name: Saving the word from Cyber Attack' data-place= 'right' data-type= 'info' text-align= 'left' data-multiline ='true' onClick={() => {ReactTooltip.show(this.booRef) }} data-event='click'> </button>
<ReactTooltip />
    </div>

   {/*Div for Booth 113*/}   
       <div style={{ position:"relative", top:"-26%", left:"12.5%", height:'50px', width:'50px'}}> 
             <button style={{ 
  //background: 'transparent', 
  outline: 'none', border: 'none', height: '100%', width: '100%'}} ref={ref => this.booRef = ref} data-tip='Team Name: Expose<br /> Project Name: Saving the word from Cyber Attack' data-place= 'right' data-type= 'info' text-align= 'left' data-multiline ='true' onClick={() => {ReactTooltip.show(this.booRef) }} data-event='click'> </button>
<ReactTooltip />
    </div>

       {/*Div for Booth 114*/}   
       <div style={{ position:"relative", top:"-22.5%", left:"12.5%", height:'50px', width:'50px'}}> 
             <button style={{ 
  //background: 'transparent', 
  outline: 'none', border: 'none', height: '100%', width: '100%'}} ref={ref => this.booRef = ref} data-tip='Team Name: Expose<br /> Project Name: Saving the word from Cyber Attack' data-place= 'right' data-type= 'info' text-align= 'left' data-multiline ='true' onClick={() => {ReactTooltip.show(this.booRef) }} data-event='click'> </button>
<ReactTooltip />
    </div>
    

       {/*Div for Booth 115*/}   
       <div style={{ position:"relative", top:"-18.5%", left:"12.5%", height:'100px', width:'50px'}}> 
             <button style={{ 
  //background: 'transparent', 
  outline: 'none', border: 'none', height: '100%', width: '100%'}} ref={ref => this.booRef = ref} data-tip='Team Name: Expose<br /> Project Name: Saving the word from Cyber Attack' data-place= 'right' data-type= 'info' text-align= 'left' data-multiline ='true' onClick={() => {ReactTooltip.show(this.booRef) }} data-event='click'> </button>
<ReactTooltip />
</div>
       {/*Div for Booth 116*/}   
       <div style={{ position:"relative", top:"-65.5%", left:"21.25%", height:'100px', width:'50px'}}> 
             <button style={{ 
  //background: 'transparent', 
  outline: 'none', border: 'none', height: '100%', width: '100%'}} ref={ref => this.booRef = ref} data-tip='Team Name: Expose<br /> Project Name: Saving the word from Cyber Attack' data-place= 'right' data-type= 'info' text-align= 'left' data-multiline ='true' onClick={() => {ReactTooltip.show(this.booRef) }} data-event='click'> </button>
<ReactTooltip />
    </div>

{/*Div for Booth 117*/}   
       <div style={{ position:"relative", top:"-58.5%", left:"21.25%", height:'100px', width:'50px'}}> 
             <button style={{ 
  //background: 'transparent', 
  outline: 'none', border: 'none', height: '100%', width: '100%'}} ref={ref => this.booRef = ref} data-tip='Team Name: Expose<br /> Project Name: Saving the word from Cyber Attack' data-place= 'right' data-type= 'info' text-align= 'left' data-multiline ='true' onClick={() => {ReactTooltip.show(this.booRef) }} data-event='click'> </button>
<ReactTooltip />
    </div>

{/*Div for Booth 118*/}   
       <div style={{ position:"relative", top:"-105.5%", left:"29.25%", height:'50px', width:'50px'}}> 
             <button style={{ 
  //background: 'transparent', 
  outline: 'none', border: 'none', height: '100%', width: '100%'}} ref={ref => this.booRef = ref} data-tip='Team Name: Expose<br /> Project Name: Saving the word from Cyber Attack' data-place= 'right' data-type= 'info' text-align= 'left' data-multiline ='true' onClick={() => {ReactTooltip.show(this.booRef) }} data-event='click'> </button>
<ReactTooltip />
    </div>

{/*Div for Booth 119*/}   
       <div style={{ position:"relative", top:"-102.25%", left:"29.25%", height:'50px', width:'50px'}}> 
             <button style={{ 
  //background: 'transparent', 
  outline: 'none', border: 'none', height: '100%', width: '100%'}} ref={ref => this.booRef = ref} data-tip='Team Name: Expose<br /> Project Name: Saving the word from Cyber Attack' data-place= 'right' data-type= 'info' text-align= 'left' data-multiline ='true' onClick={() => {ReactTooltip.show(this.booRef) }} data-event='click'> </button>
<ReactTooltip />
    </div>

 	</div>);	
}
}


export default Map;
