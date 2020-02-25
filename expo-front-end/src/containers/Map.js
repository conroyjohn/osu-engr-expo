import React from 'react';
import expo from '../Images/trade-show-floor-plan.png'; 
import Image from'react-image-resizer';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import ReactTooltip from 'react-tooltip';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Tooltip from '@material-ui/core/Tooltip';
import {Row,Col} from 'react-flexbox-grid';

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
data-tip='Team Name: Art Attacks<br /> Project Name: Saving the word from Cyber Attack <br /> Project description: This project is about securing the world of tomorrow from nationwide attacks using blah blah blah' data-place= 'right' data-type= 'info' text-align= 'left' data-multiline ='true' onClick={() => {ReactTooltip.show(this.sooRef) }} data-event='click'> </button>
<ReactTooltip />

<div style={{ position:"relative", top:"1%", left:"12.5%", width: '50px', height: '30px'}}> 
<button style={{ background: 'transparent', outline: 'none', border: 'none', height: '100%', width: '100%'}} ref={ref => this.mooRef = ref} 
//When integrating use this section of code:
//use<ReactTooltip id='test' getContent={() => { return null }}/>
data-tip='put Data in here' data-place= 'right' data-type= 'info' text-align= 'left' data-multiline ='true' onClick={() => {ReactTooltip.show(this.mooRef) }} data-event='click'> </button>
<ReactTooltip />
</div>

</div>
<div style={{ position:"relative", top:"8%", left:"12.25%", width: '50px', height: '30px'}}> 
<button style={{ 
  //background: 'transparent', 
  outline: 'none', border: 'none', height: '100%', width: '100%'}} ref={ref => this.fooRef = ref} 
//When integrating use this section of code:
//use<ReactTooltip id='test' getContent={() => { return null }}/> Delete the string data in data-tip
data-tip='Team Name: Art Attacks<br /> Project Name: Saving the word from Cyber Attack <br /> Project description: This project is about securing the world of tomorrow from nationwide attacks using blah blah blah' data-place= 'right' data-type= 'info' text-align= 'left' data-multiline ='true' onClick={() => {ReactTooltip.show(this.fooRef) }} data-event='click'> </button>
<ReactTooltip />
</div>

    <div style={{ position:"relative", top:"26%", left:"9%"}}> 
             <button ref={ref => this.looRef = ref} data-tip='Team Name: Tim sucks<br /> Project Name: Tim sucks so much i do not know how he can still have a mouth because he sucks so much' data-place= 'right' data-type= 'info' text-align= 'left' data-multiline ='true' onClick={() => {ReactTooltip.show(this.looRef) }} data-event='click'> </button>
<ReactTooltip />
            </div>
     
 	</div>);	
}
};




function App() {
   return (
      <div style={{ //backgroundImage:`url(require(${expo}))`,
		    backgroundImage: "url(/trade-show-floor-plan.png)",
	            height:"401px",
		    width:"100%",
		    backgroundposition: "center",
		    backgroundRepeat: "no-repeat" }} >
         <h1> Hello <br/>
	Hello2 <br/>
	Hello3 <br/>
	Hello4</h1>
	
      </div>
   );
}

export default Map;
