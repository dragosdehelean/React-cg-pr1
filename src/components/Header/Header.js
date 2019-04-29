import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Link,	
	withStyles
} from "@material-ui/core";


const styles = theme => ({
	link: {
      margin: theme.spacing.unit * 2,
      color: 'white'
	}
});

const Header = ({ classes }) => {
	return (
		<AppBar position="static">
			<Toolbar>
				<img
					src="https://promotii.vodafone.ro/landing/superoferte-online/images/v383954.png"
					alt="Kitten"
					height="45"
					style={{ "marginRight": "10px" }}
				/>
				<Typography variant="h6" color="inherit">
					Vodafone Benefits App
				</Typography>
				<Typography>
					<Link
						href="/benefits-enrollment"
                  color="inherit"
                  variant="h6"
						className={classes.link}
					>
						Benefits
					</Link>
					<Link
						href="/checkout"
                  color="inherit"
                  variant="h6"
						className={classes.link}
					>
						Checkout
					</Link>

					
				</Typography>
				
			</Toolbar>
		</AppBar>
	);
};

export default withStyles(styles)(Header);
