import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EnrollmentForm from "./views/EnrollmentForm/EnrollmentForm";
import Checkout from "./components/Checkout/Checkout"

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/benefits-enrollment" component={EnrollmentForm} />
				<Route exact path="/checkout" component={Checkout} />
        {/* <Route component={NotFound} /> */}
			</Switch>
		</BrowserRouter>
	);
}

export default App;
