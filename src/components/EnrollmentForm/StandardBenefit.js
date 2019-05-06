import React, { useContext } from "react";
import propTypes from "prop-types";
import { EnrollContext, DispatchContext } from "../../context/EnrollContext";
import {
	withStyles,
	Typography,
	Radio,
	Card,
	CardMedia,
	CardContent,
	CardActionArea,
	CardActions
} from "@material-ui/core";

/**
 * CSS
 */
const styles = theme => ({
	benefitContainer: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around"
	},
	card: {
		maxWidth: 310,
		margin: "10px 10px"
	},
	media: {
		// object-fit is not supported by IE 11.
		objectFit: "cover",
		height: 240
	},
	cardActions: {
		padding: 0
	},
	radio: {
		margin: "0 auto"
	}
});


/**
 * MAIN COMPONENT 
 */
const StandardBenefit = React.memo( ({ classes, benefit, benefitIndex }) => {

	const {dispatch} = useContext(DispatchContext);
	
	// Calculates if the there is only one (default) provider
	const isDefault = benefit.options.length > 1 ? false : true;

	console.log("Sunt componenta StandardBenefit")

	return (
		<div className={classes.benefitContainer}>
			{benefit.options.map(provider => (
				<Card
					className={classes.card}
					key={benefit.name + provider.name}
					onClick={() =>
						dispatch({
							type: "changeStandardBenefitProvider",
							benefitIndex: benefitIndex,
							providerName:  provider.name
						})
					}
				>
					<CardActionArea>
						<CardMedia
							component="img"
							alt={provider.name}
							className={classes.media}
							image={provider.illustration}
							title={provider.name}
						/>
						<CardContent>
							<Typography variant="h6" component="h3" align="center">
								{provider.name}
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions className={classes.cardActions}>
						<Radio
							className={classes.radio}
							checked={
								benefit.selectedProvider === provider.name || isDefault
							}
							name={benefit.name}
							value={provider.name}
							aria-label={provider.name}
							disabled={isDefault}
							color="primary"
						/>
					</CardActions>
				</Card>
			))}
		</div>
	);
});


StandardBenefit.propTypes = {
	benefitIndex: propTypes.number.isRequired
};

export default withStyles(styles)(StandardBenefit);
