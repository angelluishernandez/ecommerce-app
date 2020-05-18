import React from "react";
import { ProductConsumer } from "./contexts/ProductProvider";
import { ButtonContainer } from "./StyledComponents/Button";
import { Link } from "react-router-dom";
import { ModalContainer } from "./StyledComponents/ModalContainer";

const Modal = () => {
	return (
		<ProductConsumer>
			{(value) => {
				const { modalOpen, closeModal } = value;
				const { img, title, price } = value.modalProduct;

				if (!modalOpen) {
					return null;
				} else {
					return (
						<ModalContainer>
							<div className="container">
								<div className="row">
									<div
										id="modal"
										className="col-8 col-lg-4 text-center text-capitalize p-5"
									>
										<h5>Item added to the cart</h5>
										<img src={img} alt="cart" className="img-fluid" />
										<h5>{title}</h5>
										<h5 className="text-muted">price: ${price}</h5>
										<Link to="/">
											<ButtonContainer onClick={() => closeModal()}>
												Store
											</ButtonContainer>
										</Link>
										<Link to="/cart">
											<ButtonContainer cart onClick={() => closeModal()}>
												Go to cart
											</ButtonContainer>
										</Link>
									</div>
								</div>
							</div>
						</ModalContainer>
					);
				}
			}}
		</ProductConsumer>
	);
};

export default Modal;
