/**
 *  Dipslays a group of providers for a specific good/service (eg. gas tickets, private pension etc.)
 *
 *  Should handle one specific case: when there is only one provider, the option for it is disabled
 *
 *  Gets data and actions from Context API
 */

import React, { Component } from "react";
import propTypes from "prop-types";
import { Consumer } from "../../components/Context/EnrollContext";
import { withStyles, Typography, Radio } from "@material-ui/core";

/**
 * CSS
 */
const styles = theme => ({
  providersContainer: {
    display: "flex",
	justifyContent: "space-around",
	flexWrap: "wrap",
	flex: 3,
  },
  providerBox: {
	flex: "50%",
	display: "flex",	
	alignItems: "center",	
	paddingLeft: 50,
  }
});

/**
 * MAIN COMPONENT
 */
const ProvidersGroup = ({ classes, benefitIndex, optionIndex }) => {
  return (
    <Consumer>
      {context => {
        const {
          selectedProvider,
          providers,
          name
        } = context.benefits.variableBenefits.benefitList[benefitIndex].options[
          optionIndex
		];
		const isDefault = context.isDefaultOption(benefitIndex, optionIndex);
        return (
          <div className={classes.providersContainer}>
            {providers.map(provider => {
              return (
                <div className={classes.providerBox} key={name + provider} title={"Choose your " + name}>
                  <Radio
                    checked={selectedProvider === provider || isDefault}
                    onChange={() =>
                      context.changeVariableBenefitProvider(
                        benefitIndex,
                        optionIndex,
                        provider
                      )
					}
					disabled={isDefault}
                    value={provider}
                    name={name}
                    color="primary"
                  />
                  <Typography>{provider}</Typography>
                </div>
              );
            })}
          </div>
        );
      }}
    </Consumer>
  );
};

ProvidersGroup.propTypes = {
  benefitIndex: propTypes.number.isRequired,
  optionIndex: propTypes.number.isRequired
};

export default withStyles(styles)(ProvidersGroup);
