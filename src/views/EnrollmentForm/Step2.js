import React from "react";

// @material-ui/core components
import {
  withStyles,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Radio
} from "@material-ui/core";

import BenefitProvidersPanel from "./BenefitProvidersPanel";
import benefits from "./../../shared/benefits";

const styles = theme => ({
  root: {
    padding: "40px 24px 0",
  },
  heading:{
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
    alignItems: "center",
    // border: "1px solid red"
  },
  benefitIllustration: {
    flex: "33.3333%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",    
    paddingRight: "0 !important"
    // border: "1px solid green",
  }, 
});

/**
 * Begin Main Component
 */
class Step2 extends React.Component {
  state = {
    selectedMajorValue: null,
    expanded: null,
    benefits: benefits,
  };

  handleMajorOptionChange = ev => {
    // how the state will be changed
    const mainAction = {
      selectedMajorValue: ev.target.value,
      expanded: ev.target.value
    };

    // special case for Option 2 (default minor option = Sodexo)
    if (ev.target.value === "MajorOption2") {
      this.setState({
        ...mainAction,
        minorOptions: { set2: "2-Sodexo" }
      });
    } else {
      this.setState({
        ...mainAction,
        minorOptions: {} // reset minor options at every major selection
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { selectedMajorValue } = this.state;
    const { majorOptions } = this.state.benefits;

    return (
      <div className={classes.root}>
        
        <Typography variant="h5" className={classes.heading}>
						<strong>Choose one of the five options below:</strong>
				</Typography>

        {/* Iterates all variable benefits */}
        {majorOptions.map(majorOption => (
          <ExpansionPanel expanded={this.state.expanded === majorOption.text}>
            <ExpansionPanelSummary classes={{ content: classes.content }}>
              <span className={classes.benefitDescription}>
                <Radio
                  checked={selectedMajorValue === majorOption.text}
                  onChange={this.handleMajorOptionChange}
                  value={majorOption.text}
                  name={majorOption.text}
                  color="primary"
                />
                <Typography>{majorOption.text}</Typography>
              </span>
              <span className={classes.benefitIllustration}>
                {majorOption.illustration}
              </span>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <BenefitProvidersPanel
                secOptions={majorOption.secondaryOptions}
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}

       
      </div>
    );
  }
}

export default withStyles(styles)(Step2);
