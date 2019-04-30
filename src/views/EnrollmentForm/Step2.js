/**
 * Presents the view with all Variable Benefits. The user can select only one of them.
 *
 * When a Variable Benefit is selected, the user is presented with the corresponding set of Options for that Benefit
 *
 */

import React from "react";
import { Consumer } from "../../components/Context";

// @material-ui/core components
import {
	withStyles,
	Typography,
	ExpansionPanel,
	ExpansionPanelSummary,
	ExpansionPanelDetails,
	Radio
} from "@material-ui/core";

import BenefitOptions from "./BenefitOptions";
import benefits from "./../../components/Context/benefits";

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
		// border: "1px solid green",
	}
});

/**
 * Begin Main Component
 */
class Step2 extends React.Component {
	state = {
		// keeps track of which Expansion Panel is expanded, with a Benefit name
		expanded: null
	};

	handleBenefitChange = (benefitName, variableBenefitChange) => {
		// how the state will be changed
		this.setState({
			expanded: benefitName
		});

		variableBenefitChange(benefitName);
	};

	render() {
		const { classes } = this.props;

		return (
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
									expanded={this.state.expanded === benefit.name}
									key={benefit.name}
								>
									<ExpansionPanelSummary
										classes={{ content: classes.content }}
									>
										<span className={classes.benefitDescription}>
											<Radio
												checked={selectedBenefit === benefit.name}
												onChange={() =>
													this.handleBenefitChange(
														benefit.name,
														context.variableBenefitChange
													)
												}
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
	}
}

export default withStyles(styles)(Step2);
