/**
 * Presents the view with all Variable Benefits. The user can select only one of them.
 *
 * When a Variable Benefit is selected, the user is presented with the corresponding set of Options for that Benefit
 *
 */

import React, { useContext } from "react";
import { EnrollContext, DispatchContext } from "../../context/EnrollContext";
import OptionGroups from "../../components/EnrollmentForm/OptionGroups";
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
const Step2 = ({ classes }) => {
	const { variableBenefits} = useContext(EnrollContext);
	const {dispatch} = useContext(DispatchContext);
	const { selectedBenefit, benefitsList } = variableBenefits;

	return (
		<div className={classes.root}>
			<Typography variant="h5" className={classes.heading}>
				<strong>Choose one of the five options below:</strong>
			</Typography>

			{benefitsList.map((benefit, benefitIndex) => (
				<ExpansionPanel
					expanded={selectedBenefit === benefit.name}
					key={benefit.name}
				>
					<ExpansionPanelSummary
						classes={{ content: classes.content }}
						onClick={() =>
							dispatch({
								type: "changeVariableBenefit",
								benefitName: benefit.name
							})
						}
					>
						<span className={classes.benefitDescription}>
							<Radio
								checked={selectedBenefit === benefit.name}
								value={benefit.name}
								name="Variable benefits"
								color="primary"
							/>
							<Typography>{benefit.text}</Typography>
						</span>
						<span className={classes.benefitIllustration}>
							{benefit.illustration}
						</span>
					</ExpansionPanelSummary>

					<ExpansionPanelDetails>
						<OptionGroups
							options={benefit.options}
							benefitIndex={benefitIndex}
						/>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			))}
		</div>
	);
};

export default withStyles(styles)(Step2);
