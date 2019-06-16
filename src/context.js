import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailProduct: detailProduct
    }
    handleDetail = () => {
        console.log("log detail yes no")
    }
    addToCart = () => {
        console.log("add detail")
    }
    tester = () => {
        console.log("State products yes: ", this.state.products[0].inCart);
        console.log("Data products yes: ", storeProducts[0].inCart);
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider >
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
