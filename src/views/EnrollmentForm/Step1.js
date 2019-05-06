import React, { useContext } from "react";
import StandardBenefit from "../../components/EnrollmentForm/StandardBenefit";
import { EnrollContext } from "../../context/EnrollContext";

// @material-ui/core components
import { withStyles, Typography } from "@material-ui/core";

/**
 * CSS
 */
const styles = theme => ({
	root: {
		padding: "10px 40px 0"
	},
	heading: {
		margin: "35px 0 20px"
	}
});

/**
 * MAIN COMPONENT
 */
const Step1 = ({ classes }) => {

	const { standardBenefits } = useContext(EnrollContext);

	console.log("Sunt componenta Step1");

	return (
		<div className={classes.root}>
			{standardBenefits.map((benefit, benefitIndex) => (
				<React.Fragment key={benefit.name}>
					<Typography
						variant="h5"
						color="secondary"
						className={classes.heading}
					>
						<strong>{benefit.name}</strong>
					</Typography>
					{/* Sends "slected" as prop to stop useless re-rendering */}
					<StandardBenefit benefitIndex={benefitIndex} benefit={benefit} selected={benefit.selectedProvider}/>
					
				</React.Fragment>
			))}
		</div>
	);
};

export default withStyles(styles)(Step1);
