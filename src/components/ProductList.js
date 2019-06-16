import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../context';

class ProductList extends Component {
    state = {
        products: storeProducts
    }
    render() {
        console.log(this.state.products)
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"/>
                        <div className="row">
                            <ProductConsumer>
                                {(henlo) => {
                                    return <h1>{henlo}</h1>
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            // <div>
            //     <Product />
            // </div>
        );
    }
}

export default ProductList;