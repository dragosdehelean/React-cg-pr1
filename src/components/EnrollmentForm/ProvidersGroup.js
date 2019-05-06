/**
 *  Dipslays a group of providers for a specific good/service (eg. gas tickets, private pension etc.)
 *
 *  Should handle one specific case: when there is only one provider, the option for it is disabled
 *
 */

import React, { useContext, useState } from "react";
import propTypes from "prop-types";
import { EnrollContext, DispatchContext } from "../../context/EnrollContext";
import { withStyles, Typography, Radio } from "@material-ui/core";

/**
 * CSS
 */
const styles = theme => ({
	providersContainer: {
		display: "flex",
		justifyContent: "space-between",
		flexWrap: "wrap",
		flex: 3
		// border: "1px solid red",
	},
	providerBox: {
		flex: "50%",
		display: "flex",
		alignItems: "center",
		paddingLeft: 35
	},
	optionName: {
		flexBasis: "100%",
		// textAlign: "center"
		paddingLeft: "30%"
	}
});

/**
 * MAIN COMPONENT
 */
const ProvidersGroup = React.memo(
	({ classes, benefitIndex, groupIndex, group }) => {
		// const ProvidersGroup =  ({ classes, benefitIndex, groupIndex, group })=> {
		const { dispatch } = useContext(DispatchContext);

		// Calculates if the there is only one (default) provider
		const isDefault = group.options.length > 1 ? false : true;

		console.log("Sunt componenta ProvidersGroup");

		function handleChange(option) {
			dispatch({
				type: "changeVariableBenefitProvider",
				benefitIndex: benefitIndex,
				groupIndex: groupIndex,
				optionName: option
			});
		}

		return (
			<div className={classes.providersContainer}>
				<Typography className={classes.optionName} variant="caption">
					{group.text}
				</Typography>

				{group.options.map(option => {
					return (
						<div
							className={classes.providerBox}
							key={group.text + option}
							title={"Choose your " + group.text}
						>
							<Radio
								checked={group.selectedProvider === option || isDefault}
								onChange={() => handleChange(option)}
								disabled={isDefault}
								value={option}
								name={group.name}
								color="primary"
							/>
							<Typography>{option}</Typography>
						</div>
					);
				})}
			</div>
		);
	}
);

ProvidersGroup.propTypes = {
	benefitIndex: propTypes.number.isRequired,
	groupIndex: propTypes.number.isRequired,
	group: propTypes.object.isRequired
};

export default withStyles(styles)(ProvidersGroup);
