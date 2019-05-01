/**
 * Holds the logic for the change of view between the 3 steps of the Enrollment Form
 *
 * The rest of the logic is held in /components/Context/EnrollContext.js
 */

import React from "react";
import {
  withStyles,
  Paper,
  Button,
  Typography,
  Tabs,
  Tab
} from "@material-ui/core";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

// overall canvas width
const canvasWidth = 798;

const styles = theme => ({
  layout: {
    width: canvasWidth,
    marginLeft: "auto",
    marginRight: "auto"
  },
  paper: {
    marginTop: theme.spacing.unit * 6,
    marginBottom: theme.spacing.unit * 6,
    position: "relative"
  },
  header: {
    padding: theme.spacing.unit * 5
  },
  steps: {
    width: canvasWidth / steps.length,
    backgroundColor: "rgba(200, 200, 200, 0.2)",
    fontWeight: "bold"
  },
  tabNav: {
    position: "relative"
  },
  movingTab: {
    position: "absolute",
    top: "-1px",
    left: "0px",
    color: "#FFF",
    padding: "12px",
    cursor: "pointer",
    width: canvasWidth / steps.length + 6,
    fontSize: "0.8125rem;",
    lineHeight: "1.5rem",
    fontWeight: "bold",
    borderRadius: "4px",
    textTransform: "uppercase",
    WebkitFontSmoothing: "subpixel-antialiased",
    textAlign: "center",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(230, 0, 0, 0.4)",
	backgroundColor: "#E60000",
	transition: "all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)",
  },
  buttons: {
    padding: theme.spacing.unit * 3,
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginLeft: theme.spacing.unit
  }
});

const steps = [
  {
    stepName: "Medical Services",
    stepComponent: "Step1",
    stepId: "medical"
  },
  {
    stepName: "My Choices",
    stepComponent: "Step2",
    stepId: "mychoices"
  },
  { stepName: "Review Options", stepComponent: "Step3", stepId: "review" }
];

class EnrollmentForm extends React.Component {
  state = {
    activeStep: 0,
    slidingTabAnimation: {
      transform: "translate3d(-8px, 0px, 0)"      
    }
  };

  /**
   *  Generates the MAIN VIEW
   */
  getStepContent = step => {
    switch (step) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      default:
        throw new Error("Unknown step");
    }
  };

  /**
   *  Handles click on the form's bottom buttons
   */
  handleButtonClick = direction => {
    // 1) next button was clicked and is not the final view
    if (direction > 0 && this.state.activeStep !== steps.length - 1) {
      // moves tab and increments activeStep
      this.navigationStepChange(this.state.activeStep + 1);
    }
    // 2) back button
    else if (direction < 0 && this.activeStep !== 0) {
      // moves tab and decrements activeStep
      this.navigationStepChange(this.state.activeStep - 1);
    }
  };

  /**
   * Handles Navigation between Form's Tabs.
   *
   * Changes the step index and
   *
   * @param {string} index - The step's index (0 - 2).
   */
  navigationStepChange = index => {
    // case for first step
    let move_distance = -8;

    if (index !== 0 && index === steps.length) {
      // case for last step
      move_distance = index * (canvasWidth / steps.length) + 10;
    } else if (index !== 0 && index !== steps.length) {
      // case for intermediary step
      move_distance = index * (canvasWidth / steps.length);
    }

    // Changes the position of the sliding tab
	const slidingTabAnimation = {
		transform: "translate3d(" + move_distance + "px, 0px, 0)"
	}
    this.setState({
      slidingTabAnimation: slidingTabAnimation,
      activeStep: index
    });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const activeTabStyle = { style: { backgroundColor: "#FFFFFF" } };

    return (
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            className={classes.header}
          >
            <strong>Benefits Enrollment</strong>
          </Typography>

          {/* NAVIGATION TABS */}

          <div className={classes.tabNav}>
            <Tabs
              value={this.state.activeStep}
              TabIndicatorProps={activeTabStyle}
            >
              {steps.map((step, index) => {
                return (
                  <Tab
                    key={step.stepId}
                    label={step.stepName}
                    className={classes.steps}
                    onClick={e => {
                      e.preventDefault();
                      this.navigationStepChange(index);
                    }}
                  />
                );
              })}
            </Tabs>

            {/* Sliding Tab */}
            <Typography
              className={classes.movingTab}
              style={this.state.slidingTabAnimation}
            >
              {steps[this.state.activeStep].stepName}
            </Typography>
          </div>

          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                {/* Renders Thank You View */}

                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {/* MAIN VIEW */}

                {this.getStepContent(activeStep)}

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button
                      onClick={() => this.handleButtonClick(-1)}
                      className={classes.button}
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => this.handleButtonClick(1)}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1
                      ? "Confirm Options"
                      : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(EnrollmentForm);
