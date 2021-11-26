import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';

class Cart extends Component
{
    render() {


        let total = 0;

        this.props.cart.map(item => total += item.product.price * item.quantity);

			const cart = this.props.cart.length > 0 ? (
				
            <div>
                <div className="cart">
                    {
							this.props.cart.map(item => {
								console.log("tetsting");
                            return (
                                <div key={item.product.id}>
                                    <Item item={item} />
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="cart__footer">
                    <div className="cart__footer-wrapper">
                        <div className="cart__footer-wrapper__total">
                            <h4 className="text-right">Total <strong>${total.toFixed(3)}</strong></h4>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="cart">
                <p>Cart is empty</p>
            </div>
        )
        return (
                <div className="cart__container">
                    
                                            <div className="cart__container__row__value">
                                                <h5><span className="cart__container__row__remove"></span> Cart</h5>
                                            </div>
{ cart }
                                        </div>
                          
        )
    }
}

const mapStateToProps = (state) => {

  return {
		cart: state.cart.cart,
		cartUpdated: () => { return true }
  }
};


export default connect(mapStateToProps)(Cart);