import React from "react";

// @material-ui/core components
import {
	withStyles,
	Typography,
	Grid,
	Radio,
	Card,
	CardActionArea,
	CardActions,
	CardMedia,
	CardContent,
	Divider
} from "@material-ui/core";

import mgDental from "../../assets/img/mg_dental.jpg";
import reginaMaria from "../../assets/img/regina_maria.jpg";
import sanador from "../../assets/img/sanador.jpg";

const styles = theme => ({
	root: {
		padding: theme.spacing.unit * 5
	},
	card: {
		maxWidth: 345,
		margin: "0 auto"
	},
	media: {
		// object-fit is not supported by IE 11.
		objectFit: "cover",
		height: 240
	},
	radio: {
		margin: "0 auto"
	}
});

class Step1 extends React.Component {
	// TODO - imi trebuie informatia asta pe state?
	state = {
		selectedValue: null
	};

	handleChange = ev => {
		// TODO finalizeaza logica de aici
		this.setState({ selectedValue: ev.target.value });
	};

	render() {
		const { classes } = this.props;

		return (
			<Grid container spacing={24} className={classes.root}>
				<Grid item xs={12}>
					<Typography variant="h5" color="secondary" gutterBottom>
						<strong>1. Choose your Medical Service Provider</strong>
					</Typography>
				</Grid>

				{/* Reteaua de Sanatate Regina Maria */}
				<Grid item xs={12} md={6}>
					<Card className={classes.card}>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Reteaua de Sanatate Regina Maria"
								className={classes.media}
								image={reginaMaria}
								title="Reteaua de Sanatate Regina Maria"
							/>
							<CardContent>
								<Typography variant="h6" component="h3" align="center">
									Reteaua Regina Maria
								</Typography>
								
							</CardContent>
						</CardActionArea>
						<CardActions className={classes.cardActions}>
							<Radio
								className={classes.radio}
								name="medical_services_provider"
								value="Regina Maria"
								aria-label="Regina Maria"
								color="primary"								
							/>
						</CardActions>
					</Card>
				</Grid>

				{/* Sanador */}
				<Grid item xs={12} md={6} className={classes.optionCell}>
					<Card className={classes.card}>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Sanador"
								className={classes.media}
								image={sanador}
								title="Sanador"
							/>
							<CardContent>
								<Typography variant="h6" component="h3" align="center">
									Sanador
								</Typography>
								
							</CardContent>
						</CardActionArea>
						<CardActions className={classes.cardActions}>
							<Radio
								className={classes.radio}
								name="medical_services_provider"
								value="Sanador"
								aria-label="Sanador"
								color="primary"								
							/>
						</CardActions>
					</Card>
				</Grid>

				<Grid item xs={12}>
					<Divider component="hr" />
					<br />
					<Typography variant="h5" color="secondary" gutterBottom>
						<strong>
							2. Dental Services Provider (default option)
						</strong>
					</Typography>
				</Grid>
				<Grid item xs={12}>
					{/* Default Dental Services Provider */}

					<Card className={classes.card}>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="MG Dental"
								className={classes.media}
								image={mgDental}
								title="MG Dental"
							/>
							<CardContent>
								<Typography variant="h6" component="h3" align="center"> 
									MG Dental
								</Typography>
								
							</CardContent>
						</CardActionArea>
						<CardActions className={classes.cardActions}>
							<Radio
								className={classes.radio}
								name="dental_services_provider"
								value="MG Dental"
								aria-label="MG Dental"
								color="secondary"
								checked={true}
								disabled={true}
							/>
						</CardActions>
					</Card>

					{/* END Dental Services Provider */}
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(Step1);
