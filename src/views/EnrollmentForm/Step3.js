import React from "react";

// @material-ui/core components
import {
	withStyles,
	Typography,
	Grid,
   Radio,
   Avatar
} from "@material-ui/core";

import apple from './../../assets/img/apple-icon.png';

const styles = theme => ({
	root: {
      padding: theme.spacing.unit * 5,
	},
	optionCell: {
		textAlign: "center"
	},
   medicalProvider: {
      margin: "auto",
      width: 100,
      height: 100,
   }
});

class Step3 extends React.Component {
	state = {
		selectedValue: null
	};

	handleChange = ev => {
		// some implementation
		this.setState({ selectedValue: ev.target.value });
	};

	render() {
      const { classes } = this.props;
      
      console.log(apple)

		return (
			<Grid container spacing={24} className={classes.root}>
				<Grid item xs={12} >
					<Typography variant="h6" gutterBottom>
						Choose your Medical Service Provider
					</Typography>
				</Grid>

				<Grid item xs={12} md={6} className={classes.optionCell}  >
					
               <Avatar alt="Regina Maria" src={apple} className={classes.medicalProvider} />
               <Radio
						checked={this.state.selectedValue === "a"}
						onChange={this.handleChange}
						value="a"
						name="medical_services_provider"
						aria-label="A"
					/>
				</Grid>

				<Grid item xs={12} md={6} className={classes.optionCell}>					
               <Avatar alt="Sanador" src="https://www.sanador.ro/wp-content/uploads/2018/12/logo_sanador.png.jpg" className={classes.medicalProvider} />
               <Radio
						checked={this.state.selectedValue === "b"}
						onChange={this.handleChange}
						value="b"
						name="medical_services_provider"
						aria-label="B"
					/>
				</Grid>

				<Grid item xs={12}>
               <Typography variant="subtitle1" gutterBottom>
						Default option for Dental Services Provider
					</Typography>
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(Step3);
