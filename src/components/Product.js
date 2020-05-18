import React from "react";
import { Link } from "react-router-dom";
import { ProductWrapper } from "./StyledComponents/ProductWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { ProductConsumer } from "./contexts/ProductProvider";

const Product = (props) => {
	const { id, title, img, price, inCart } = props.product;
	return (
		<ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 ">
			<div className="card mt-2">
				<ProductConsumer>
					{(value) => (
						<div
							className="img-container p-5"
							onClick={() => value.handleDetail(id)}
						>
							<Link to="/details">
								<img src={img} alt="phone img" className="card-img-top" />
							</Link>
							<button
								className="cart-btn"
								disabled={inCart ? true : false}
								onClick={() => {
									value.addToCart(id);
									value.openModal(id);
								}}
							>
								{inCart ? (
									<p className="text-capitalize mb-0" disabled>
										In cart
									</p>
								) : (
									<FontAwesomeIcon icon={faShoppingCart} />
								)}
							</button>
						</div>
					)}
				</ProductConsumer>
				<div className="card-footer d-flex justify-content-between">
					<p className="align-self-center mb-0">{title}</p>
					<h5 className="text-blue font-italic mb-0">
						<span className="mr-1">$</span>
						{price}
					</h5>
				</div>
			</div>
		</ProductWrapper>
	);
};

Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		img: PropTypes.string,
		title: PropTypes.string,
		price: PropTypes.number,
		inCart: PropTypes.bool,
	}).isRequired,
};

export default Product;
