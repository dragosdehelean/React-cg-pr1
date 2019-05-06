/**
 *  Displays groups of providers to be chosen for a specific benefit
 *
 *  Gets data and actions from Context API
 */
import React, { useContext } from "react";
import propTypes from "prop-types";
import { EnrollContext } from "../../context/EnrollContext";

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
		paddingLeft: 50
	}
});

/**
 * MAIN COMPONENT
 */
const OptionGroups = ({ classes, benefitIndex }) => {
	const preSelectColor = { color: "#EB9700" };
	const postSelectColor = { color: "#A8B400" };

	console.log("Sunt componenta OptionGroups");

	// gets data from Global Context
	const { variableBenefits } = useContext(EnrollContext);

	const optionGroups =
		variableBenefits.benefitsList[benefitIndex].optionGroups;
	const benefit = variableBenefits.benefitsList[benefitIndex];
	const isFinal = areBefitOptionsSelected(benefit);

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
				{optionGroups.map((group, groupIndex) => (
					// Sends "slected" as prop to stop useless re-rendering 
					<ProvidersGroup
						key={group.name}
						benefitIndex={benefitIndex}
						groupIndex={groupIndex}
						group={group}
						selected={group.selectedProvider}
					/>
				))}
			</div>
		</Paper>
	);
};

OptionGroups.propTypes = {
	benefitIndex: propTypes.number.isRequired
};

export default withStyles(styles)(OptionGroups);

/**
 * Calculates if the user has selected all the necessary options for a Variable Benefit,
 *  or there are still options not made
 */
const areBefitOptionsSelected = benefit => {
	// gets the Groups that have more than 1 option/provider
	const groups = benefit.optionGroups.filter(
		group => group.options.length > 1
	);

	// all options have a default provider
	if (groups.length === 0) return true;

	// all options with more than 1 provider have a selected value
	if (groups.filter(group => group.selectedProvider === null).length === 0)
		return true;
	return false;
};
