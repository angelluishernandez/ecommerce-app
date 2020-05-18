import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Details from "./components/Details";
import ProductList from "./components/ProductList";
import Modal from "./components/Modal";
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Switch>
				<Route exact path="/" component={ProductList} />
				<Route exact path="/details" component={Details} />
				<Route exact path="/cart" component={Cart} />
				<Route component={Default} />
			</Switch>
			<Modal />
		</React.Fragment>
	);
}

export default App;
