import React, { Component } from 'react';
import Product from './product';
import { connect } from 'react-redux';
import {addToCart} from "../store/action/action";


class ProductList extends Component
{
    addToCart = (product) => {
        this.props.addToCart(product);
    }

    render() {
        return (
            <div className="container">
                <h2>Products</h2>
                <br/>
                <div className="row">

                    {
                        this.props.data.map(product =>
                            <Product
                                product={product}
                                addToCart={this.addToCart}
                                inCart={this.props.cart.length > 0
                                    &&
                                    this.props.cart.filter(e => e.product.id === product.id).length > 0}
                                key={product.id} />)
                    }

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        data: state.product.data,
        cart: state.cart.cart,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => {
            dispatch(addToCart(product));
        },
       
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)