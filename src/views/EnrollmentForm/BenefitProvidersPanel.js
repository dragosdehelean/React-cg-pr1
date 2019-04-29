/**
 *  Displays groups of providers to be chosen for a specific benefit
 */
import React, { Component } from "react";
import propTypes from "prop-types";

import OptionsGroup from './OptionsGroup';

// @material-ui/core components
import { withStyles, Typography, Paper} from "@material-ui/core";

const styles = theme => ({
  root: {
    backgroundColor: "rgba(200, 200, 200, 0.2)",
    width: "100%",
    padding: "16px",
    margin: "0 10px",
    display: "flex",    
    alignItems: "center",
    
  },
  messageColumn: {
    borderRight: `2px solid ${theme.palette.divider}`,
    fontWeight: "bold",
    flex: 1.4, 
  }, 
  providersColumn: {
    flex: 3,
  } 
});

class BenefitProvidersPanel extends Component {  

  state = {
    isFinal: false
  };

  render() {
    const { isFinal } = this.state;
    const { classes } = this.props;

    const preSelectColor = { color: "#EB9700" };
    const postSelectColor = { color: "#A8B400" };

    return (
      <Paper className={classes.root} elevation={0}>
        <Typography
          variant="caption"
          className={classes.messageColumn}
          style={isFinal ? postSelectColor : preSelectColor}
        >
          {isFinal
            ? "Please go to the next step!"
            : "Please select your provider(s)"}
        </Typography>
        <div className={classes.providersColumn}>

            {this.props.secOptions.map(option =>(
              
              <OptionsGroup option={option} key={option.name}/>                
              
              ))
            }
         
        </div>
        
      </Paper>
    );
  }
}

export default withStyles(styles)(BenefitProvidersPanel);

// BenefitProvidersPanel