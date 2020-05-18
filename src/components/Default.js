import React from "react";
import { Link } from "react-router-dom";

const Default = (props) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-10 mx-auto text-center text-uppercase pt-5">
					<h1 className="display-3">404</h1>
					<h1>error</h1>
					<h2>Page not found</h2>
					<h3>
						The requested URL{" "}
						<span className="text-danger">{props.location.pathname}</span> was
						not found
					</h3>
					<Link to="/">
						<h5>GO back to the store</h5>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Default;
