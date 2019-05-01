/**
 *  Displays groups of providers to be chosen for a specific benefit
 * 
 *  Gets data and actions from Context API
 */
import React, { Component } from "react";
import propTypes from "prop-types";
import { Consumer } from "../../components/Context/EnrollContext";

import ProvidersGroup from "./ProvidersGroup";
import { withStyles, Typography, Paper } from "@material-ui/core";

/**
 * CSS
 */
const styles = theme => ({
  root: {
    backgroundColor: "rgba(200, 200, 200, 0.2)",
    width: "100%",
    padding: "16px",
    margin: "0 10px",
    display: "flex",
    alignItems: "center"
  },
  messageColumn: {
    borderRight: `2px solid ${theme.palette.divider}`,
    fontWeight: "bold",
    flex: 1.4
  },
  providersColumn: {
	flex: 3,
	paddingLeft: 50,
  }
});

/**
 * MAIN COMPONENT
 */
const BenefitOptions = ({ classes, benefitIndex }) => {

  const preSelectColor = { color: "#EB9700" };
  const postSelectColor = { color: "#A8B400" };
  
  return (
    <Consumer>
      {context => {
        const isFinal = context.areBefitOptionsSelected(benefitIndex);
        const options =
          context.benefits.variableBenefits.benefitList[benefitIndex].options;
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
              {options.map((option, optionIndex) => (
                <ProvidersGroup
                  key={option.name}              
                  benefitIndex={benefitIndex}
                  optionIndex={optionIndex}
                />
              ))}
            </div>
          </Paper>
        );
      }}
    </Consumer>
  );
};

BenefitOptions.propTypes = {
  benefitIndex: propTypes.number.isRequired
};

export default withStyles(styles)(BenefitOptions);
