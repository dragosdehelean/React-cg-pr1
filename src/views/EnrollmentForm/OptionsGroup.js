/**
 *  Dipslays a group of providers for a specific good/service (eg. gas tickets, private pension etc.)
 *
 *  Should handle one specific case: when there is only one provider, the option for it is disabled
 */

import React, { Component } from "react";
import propTypes from "prop-types";

// @material-ui/core components
import { withStyles, Typography, Radio } from "@material-ui/core";

const styles = theme => ({
  optionsContainer: {
    display: "flex",
    justifyContent: "space-around",
    flex: 3
  },
  optionItem: {
    display: "flex",
    alignItems: "center"
  }
});

class OptionsGroup extends Component {
  state = {
    selectedValue: null
  };

  handleOptionChange = ev => {
    this.setState({ selectedValue: ev.target.value });
  };

  render() {
    const { selectedValue } = this.state;
    const { classes, option } = this.props;

    return (
      <div className={classes.optionsContainer}>
        {option.providers.map(provider => {
          return (
            <div className={classes.optionItem} key={option.name + provider}>
              <Radio
                checked={selectedValue === provider}
                onChange={this.handleOptionChange}
                value={provider}
                name={option.name}
                color="primary"
              />
              <Typography>{provider}</Typography>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withStyles(styles)(OptionsGroup);
