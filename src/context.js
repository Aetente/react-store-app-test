import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: true,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState({
            products: tempProducts
        })
    }
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState({
            detailProduct: product
        })
        console.log("log detail yes no")
    }
    addToCart = (id) => {
        console.log("hello yes add to cart yes: ", id)
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState({
            products: tempProducts,
            cart: [...this.state.cart, product]
        })
    }
    getItem = (id) => {
        const product = this.state.products.find(item => item.id == id);
        return product;
    }
    openModal = (id) => {
        const product = this.getItem(id);
        this.setState({
            modalProduct: product,
            modalOpen: true
        })
    }
    closeModal = (id) => {
        this.setState({
            modalOpen: false
        })
    }
    increment = (id) => {
        console.log("i did increment yes")
    }
    decrement = (id) => {
        console.log("i did decrement yes")
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal
            }}>
                {this.props.children}
            </ProductContext.Provider >
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
