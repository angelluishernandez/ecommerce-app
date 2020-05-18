import React from "react";
import Product from "./Product";
import Title from "./StyledComponents/Title";
import { ProductConsumer } from "./contexts/ProductProvider";

const ProductList = () => {
	return (
		<React.Fragment>
			<div className="py-5">
				<div className="container">
					<Title name="Our" title="products" />

					<div className="row">
						<ProductConsumer>
							{(value) => {
								return value.products.map((product) => {
									return <Product product={product} key={product.id} />;
								});
							}}
						</ProductConsumer>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ProductList;
