import React from "react";
import Title from "../StyledComponents/Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../contexts/ProductProvider";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = (props) => {
	return (
		<ProductConsumer>
			{(value) => {
				const { cart } = value;
				if (cart.length > 0) {
					return (
						<React.Fragment>
							<Title name="Your" title="cart" />
							<CartColumns />
							<CartList value={value} />
							<CartTotals value={value} history={props.history} />
						</React.Fragment>
					);
				} else {
					return <EmptyCart />;
				}
			}}
		</ProductConsumer>
	);
};

export default Cart;
