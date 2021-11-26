import React, { Component } from 'react';


class Product extends Component
{
    state = {
        inCart: this.props.inCart
    };

    addToCart = (e) => {
console.log("added");
        e.preventDefault();

        this.props.addToCart(this.props.product)

        this.setState({
            inCart: true
        })
    }

    render() {

        const { product } = this.props;

        return (
            <div className="product">
                <div className="product__view">
                    <div className="product__coloum">
                <figure className="product__card">
                    <figcaption className="product__card__info">
                        <h4 className="product__card__info__category">{product.category}</h4>
                        <p className="product__card__info__name">{product.name}</p>
                    </figcaption>
                    <div className="product__card__info__img-wrapper">
                        <img className="product__card__info__img-wrapper__img" alt="prodcut images" src={product.image} />
                    </div>
                    
                    <div className="product__card__info__button-wrapper">

                        {
                            this.state.inCart
                                ? (
                                <button className="button">Added to cart</button>
                                )
                                : (
                                <button  onClick={this.addToCart} className="button">Add to cart</button>
                                )
                        }

                        <div className="product__card__info__price-wrapper">
                            <span className="product__card__info__price-wrapper__primary">${product.price}</span>
                        </div>
                    </div>
                    </figure>
                    </div>
                    </div>
            </div>
        )
    }
}

export default Product