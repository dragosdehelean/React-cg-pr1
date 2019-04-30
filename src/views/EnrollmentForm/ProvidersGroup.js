/**
 *  Dipslays a group of providers for a specific good/service (eg. gas tickets, private pension etc.)
 *
 *  Should handle one specific case: when there is only one provider, the option for it is disabled
 *
 *  Gets data from Context API
 */

import React, { Component } from "react";
import propTypes from "prop-types";
import { Consumer } from "../../components/Context";

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

const ProvidersGroup = ({ classes, option, benefitIndex, optionIndex }) => {
	return (
		<Consumer>
			{context => {
				const {
					selectedProvider
				} = context.benefits.variableBenefits.benefitList[
					benefitIndex
				].options[optionIndex];
				return (
					<div className={classes.optionsContainer}>
						{option.providers.map(provider => {
							return (
								<div
									className={classes.optionItem}
									key={option.name + provider}
								>
									<Radio
										checked={selectedProvider === provider}
										onChange={() =>
											context.variableBenefitProviderChange(
												benefitIndex,
												optionIndex,
												provider
											)
										}
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
			}}
		</Consumer>
	);
};

ProvidersGroup.propTypes = {
	benefitIndex: propTypes.number.isRequired,
	optionIndex: propTypes.number.isRequired
};

export default withStyles(styles)(ProvidersGroup);
