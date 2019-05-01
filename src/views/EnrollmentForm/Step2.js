/**
 * Presents the view with all Variable Benefits. The user can select only one of them.
 *
 * When a Variable Benefit is selected, the user is presented with the corresponding set of Options for that Benefit
 *
 */

import React from "react";
import { Consumer } from "../../components/Context/EnrollContext";
import BenefitOptions from "./BenefitOptions";
import {
  withStyles,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Radio
} from "@material-ui/core";

/**
 * CSS
 */
const styles = theme => ({
  root: {
    padding: "40px 24px 0"
  },
  heading: {
    marginBottom: 20,
    color: theme.palette.secondary.main
  },
  content: {
    display: "flex",
    alignItems: "center",
    minHeight: 70,
    color: theme.palette.secondary.main
  },
  benefitDescription: {
    flex: "66.6666%",
    display: "flex",
    alignItems: "center"
    // border: "1px solid red"
  },
  benefitIllustration: {
    flex: "33.3333%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: "0 !important"
  }
});

/**
 * MAIN COMPONENT
 */
const Step2 = ({ classes }) => (
  <Consumer>
    {context => {
      const {
        selectedBenefit,
        benefitList
      } = context.benefits.variableBenefits;

      return (
        <div className={classes.root}>
          <Typography variant="h5" className={classes.heading}>
            <strong>Choose one of the five options below:</strong>
          </Typography>

          {benefitList.map((benefit, benefitIndex) => (
            <ExpansionPanel
              expanded={selectedBenefit === benefit.name}
              key={benefit.name}
            >
              <ExpansionPanelSummary classes={{ content: classes.content }}>
                <span className={classes.benefitDescription}>
                  <Radio
                    checked={selectedBenefit === benefit.name}
                    onChange={() => context.changeVariableBenefit(benefit.name)}
                    value={benefit.name}
                    name={benefit.name}
                    color="primary"
                  />
                  <Typography>{benefit.name}</Typography>
                </span>
                <span className={classes.benefitIllustration}>
                  {benefit.illustration}
                </span>
              </ExpansionPanelSummary>

              <ExpansionPanelDetails>
                <BenefitOptions
                  options={benefit.options}
                  benefitIndex={benefitIndex}
                />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
        </div>
      );
    }}
  </Consumer>
);

export default withStyles(styles)(Step2);
