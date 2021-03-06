import React from "react";
import { connect } from "react-redux";

import { fetchProduct } from "../actions";
import "./styles.css";

class ProductDetail extends React.Component {
  render() {
    // console.log(this.props.product.shortDescription, "product in render");
    const {
      shortDescription,
      price,
      reviewRating,
      reviewCount,
      productName
    } = this.props.product;
    return (
      <div className="details-main-div">
        <div className="">
          <img
            alt="image"
            width="500"
            height="333"
            src={this.props.product.productImage}
          />
          <div className="">
            <a className="header">{productName}</a>
            <ul>
              <li>{shortDescription}</li>
              <li>{price}</li>
              <li>{reviewRating}</li>
              <li>{reviewCount}</li>
            </ul>
          </div>
          <button
            className="ui primary basic button"
            onClick={() => this.props.history.push("/")}
          >
            Navigate Back
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let pId = ownProps.match.params.productId;
  let productResponse = state.productResponse;
  let product = productResponse[pId];
  // console.log(product, "product in detail");
  return {
    product
  };
};

export default connect(mapStateToProps, { fetchProduct })(ProductDetail);
