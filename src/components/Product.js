import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.p;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3">
                <div className="card"> 
                    <div className="img-container p-5" onClick = {() => { console.log("image container yes") }}>
                        <Link to="details">
                            <img src={img} alt="product" className="card-img-top" />
                        </Link>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

const ProductWrapper = styled.div`
`;

export default Product;