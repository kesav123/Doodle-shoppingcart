import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCartQuantity, removeFromCart } from '../../store/action/action';


class Item extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inCart: this.props.inCart,
            quantity: this.props.item.quantity,
            btnVisible: false
        };
    }

    handleChange = (e) => {

    e.preventDefault();
 
        if(this.state.quantity !== e.target.value) {
            
            
            this.setState({
                quantity: e.target.value,
                btnVisible: true
            });
            
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.updateCartQuantity(this.props.item.product.id, this.state.quantity);

        this.setState({
            btnVisible: false
        });
    }

    handleRemove = (e) => {
        this.props.removeFromCart(this.props.item.product.id);
         this.setState({
            inCart: false
        })
    }

  render() {

      const { item } = this.props;
      console.log("te,-->",item)

      return (

          <div className="cart">
                 <div className="cart__wrapper">
                  <h4 className="cart__wrapper__name"><strong>{item.product.name}</strong></h4>
              
              
              <div className="cart__wrapper__img"><img className="img-responsive" alt="product img" src={item.product.image} />
              </div>
           
              <div className="cart__wrapper">
                  <div className="cart__wrapper__price">
                      <h6><strong> <span className="text-muted">$</span>{ item.product.price }</strong></h6>
                  </div>
                  <form onSubmit={this.handleSubmit}>
                      <div className="cart__wrapper">
                          <input type="number" className="cart__wrapper__input" onChange={this.handleChange} value={this.state.quantity}/>
                      </div>

                      {
                          this.state.btnVisible?(
                              <div className="cart__wrapper">
                                  <button type="submit" className="button-2">Update</button>
                              </div>
                          ) : null
                      }

                      <div className="cart__wrapper">
                          <button type="button" onClick={this.handleRemove} className="button-1">
                              <span className=""> Remove </span>
                          </button>
                      </div>
                  </form>
                  </div>
                  </div>
          </div>
      )
  }
}
const mapStateToProps = (state) => {

    return {
        
        inCart: state.inCart === false,
    }
};
const mapDispatchToProps = (dispatch) => {


    return {
        updateCartQuantity: (productId, quantity) => dispatch(updateCartQuantity(productId, quantity)),
        removeFromCart: (productId,inCart) => dispatch(removeFromCart(productId,inCart)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);