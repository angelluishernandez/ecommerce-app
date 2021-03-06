import React from "react";
import { ProductConsumer } from "./contexts/ProductProvider";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./StyledComponents/Button";

const Details = () => {
	return (
		<ProductConsumer>
			{(value) => {
				const { id, company, img, info, price, title, inCart } = value.details;
				return (
					<div className="container py-5">
						{/* Title */}
						<div className="row">
							<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
								<h1>{title}</h1>
							</div>
						</div>
						{/* End title */}

						{/* Product info */}
						<div className="row">
							<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
								<img src={img} alt="phone img" className="img-fluid" />
							</div>

							{/* Product text */}
							<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
								<h2>model: {title}</h2>
								<h4 className="text-title text-uppercase text-muted mt-3 mb-2 ">
									made by: <span className="text-uppercase">{company}</span>
								</h4>
								<h4 className="text-blue ">
									<strong>
										price: <span>$</span> {price}
									</strong>
								</h4>
								<p className="text-capitalize font-weight-bold mt-3 mb-0">
									some info about the product:
								</p>
								<p className="text-muted lead">{info}</p>

								{/* Buttons */}
								<div className="d-flex flex-direction-row">
									<Link to="/">
										<ButtonContainer>Back to products</ButtonContainer>
									</Link>
									<ButtonContainer
										disabled={inCart ? true : false}
										onClick={() => {
											value.addToCart(id);
											value.openModal(id);
										}}
										cart
									>
										{inCart ? "In Cart" : "add to cart"}
									</ButtonContainer>
								</div>
							</div>
						</div>
					</div>
				);
			}}
		</ProductConsumer>
	);
};

export default Details;
