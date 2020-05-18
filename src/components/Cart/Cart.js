import React from "react";
import Title from "../StyledComponents/Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../contexts/ProductProvider";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = () => {
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
							<CartTotals value={value} />
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
