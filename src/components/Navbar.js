import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { ButtonContainer } from "./StyledComponents/Button";
import { NavBarWrapper } from "./StyledComponents/NavBarWrapper";

const Navbar = () => (
	<NavBarWrapper className="navbar navbar-expand-sm bg-danger px-sm-5">
		<Link to="/">
			<FontAwesomeIcon
				icon={faStore}
				className="navbar-brand"
				style={{ color: "black" }}
			/>
		</Link>
		<ul className="navbar-nav align-items-center">
			<li className="nav-item ml-5">
				<Link to="/" className="nav-link">
					Products
				</Link>
			</li>
		</ul>
		<Link to="/cart" className="ml-auto ">
			<ButtonContainer>
				<span>
					<FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
					cart{" "}
				</span>
			</ButtonContainer>
		</Link>
	</NavBarWrapper>
);

export default Navbar;
