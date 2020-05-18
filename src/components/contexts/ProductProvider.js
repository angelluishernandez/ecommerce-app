import React, { Component, createContext } from "react";
import { storeProducts, detailProduct } from "../../data";

const ProductContext = createContext();

class ProductProvider extends Component {
	state = {
		products: [],
		details: detailProduct,
		cart: storeProducts,
		modalOpen: false,
		modalProduct: detailProduct,
		cartSubtotal: 0,
		cartTax: 0,
		cartTotal: 0,
	};

	// Product methods

	handleDetail = (id) => {
		const product = this.getItem(id);
		this.setState(() => {
			return { details: product };
		});
	};

	addToCart = (id) => {
		let tempProducts = [...this.state.products];
		const index = tempProducts.indexOf(this.getItem(id));
		const product = tempProducts[index];
		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price;
		this.setState(
			() => {
				return { products: tempProducts, cart: [...this.state.cart, product] };
			},
			() => this.addTotals()
		);
	};

	setProducts = () => {
		let products = [];
		storeProducts.forEach((item) => {
			const singleItem = {
				...item,
			};
			products = [...products, singleItem];
		});
		this.setState({
			products,
		});
	};

	getItem = (id) => this.state.products.find((item) => item.id === id);

	// Cart methods

	increment = (id) => {
		let tempCart = [...this.state.cart];
		const selectedProduct = tempCart.find((item) => item.id === id);
		const index = tempCart.indexOf(selectedProduct);
		const product = tempCart[index];
		product.count = product.count + 1;
		product.total = product.price * product.count;

		this.setState(
			{
				cart: [...tempCart],
			},
			() => this.addTotals()
		);
	};

	decrement = (id) => {
		let tempCart = [...this.state.cart];
		const selectedProduct = tempCart.find((item) => item.id === id);
		const index = tempCart.indexOf(selectedProduct);
		const product = tempCart[index];
		product.count = product.count - 1;

		if (product.count <= 0) {
			this.removeItem(id);
		} else {
			product.total = product.price * product.count;
			this.setState(
				{
					cart: [...tempCart],
				},
				() => this.addTotals()
			);
		}
	};

	removeItem = (id) => {
		let tempProducts = [...this.state.products];
		let tempCart = [...this.state.cart];

		tempCart = tempCart.filter((item) => item.id !== id);
		const index = tempProducts.indexOf(this.getItem(id));
		let removedProduct = tempProducts[index];
		removedProduct.inCart = false;
		removedProduct.count = 0;
		removedProduct.total = 0;
		this.setState(
			{
				cart: [...tempCart],
				prodcuts: [...tempProducts],
			},
			() => this.setProducts()
		);
	};

	clearCart = () => {
		this.setState(
			{
				cart: [],
			},
			() => {
				this.setProducts();
				this.addTotals();
			}
		);
	};

	addTotals = () => {
		let subTotal = 0;
		this.state.cart.map((item) => (subTotal += item.total));
		const tempTax = subTotal * 0.1;
		const tax = parseFloat(tempTax.toFixed(2));
		const total = subTotal + tax;
		this.setState({
			cartSubtotal: subTotal,
			cartTax: tax,
			cartTotal: total,
		});
	};

	// Modal methods

	openModal = (id) => {
		const product = this.getItem(id);
		this.setState({
			modalProduct: product,
			modalOpen: true,
		});
	};

	closeModal = () => {
		this.setState({
			modalOpen: false,
		});
	};

	componentDidMount() {
		this.setProducts();
	}

	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handleDetail: this.handleDetail,
					addToCart: this.addToCart,
					openModal: this.openModal,
					closeModal: this.closeModal,
					increment: this.increment,
					decrement: this.decrement,
					removeItem: this.removeItem,
					clearCart: this.clearCart,
				}}
			>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
