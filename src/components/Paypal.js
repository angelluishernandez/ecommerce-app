import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

export default class PaypalButton extends React.Component {
	render() {
		const onSuccess = (payment) => {
			// Congratulation, it came here means everything's fine!
			console.log("The payment was succeeded!", payment);
			// You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
		};

		const onCancel = (data) => {
			console.log("The payment was cancelled!", data);
		};

		const onError = (err) => {
			console.log("Error!", err);
		};

		let env = "sandbox";
		let currency = "EUR";
		let total = 1;

		const client = {
			sandbox: process.env.SANDBOX_ACCOUNT,
			production: process.env.SANDBOX_ACCOUNT,
		};

		return (
			<PaypalExpressBtn
				env={env}
				client={client}
				currency={currency}
				total={total}
				onError={onError}
				onSuccess={onSuccess}
				onCancel={onCancel}
			/>
		);
	}
}
