import React from "react";
import { connect } from "react-redux";

import { fetchProduct } from "../actions";
import "./styles.css";

class ProductDetail extends React.Component {
  render() {
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
            <a className="header">{this.props.product.productName}</a>
            <ul>
              <li>{this.props.product.shortDescription}</li>
              <li>{this.props.product.price}</li>
              <li>{this.props.product.reviewRating}</li>
              <li>{this.props.product.reviewCount}</li>
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
  return {
    product
  };
};

export default connect(mapStateToProps, { fetchProduct })(ProductDetail);
