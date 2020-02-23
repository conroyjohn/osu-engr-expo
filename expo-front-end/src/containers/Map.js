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

var sectionStyle = {
	width: "100%",
	height: "400px",
	backgroundImage: 'url(${expo})'
};

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
	<section style={sectionStyle}>
		
<Grid item>
 <Row>
 <Col xs={6} md={3}>
 
 </Col>
 <Col xs={6} md={3}>

          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={this.state.open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title="Team Name: Rockstars/n Project Description: Blah blahblah"
              >
                <Button onClick={handleTooltipOpen}> 
		<img src={expo}/>
		</Button>
              </Tooltip>
            </div>
          </ClickAwayListener>
 </Col>
</Row>
</Grid>
	</section>);	
}
}

export default Map;
