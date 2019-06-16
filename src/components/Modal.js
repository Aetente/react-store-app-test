import React, { Component } from 'react';
import styled from "styled-components";
import {ProductConsumer} from '../context';
import {ButtonHolder} from './Button';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;
                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                            <h5>
                                                item added to the cart yes
                                            </h5>
                                            <img src={img} className="img-fluid" alt="yes it is a phone"/>
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">price : ${price}</h5>
                                            <ButtonHolder onClick={() => {closeModal()}}>
                                                continue shopping
                                            </ButtonHolder>
                                            <Link to="/cart">
                                                <ButtonHolder cart onClick={() => {closeModal()}}>
                                                    go to cart yes
                                                </ButtonHolder>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    
    #modal {
        background-color: var(--mainWhite)
    }
`;
