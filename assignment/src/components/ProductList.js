import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchProducts } from "../actions";
import ProductCard from "./ProductCard";
import Loading from "./Loading";
import Pagination from "./Pagination";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    if (this.props.walmartProduct.length < 1) {
      return <Loading />;
    }
    const renderList = this.props.walmartProduct.map(walmartProduct => {
      return (
        <div className="column" style={{ paddingBottom: "4rem" }}>
          <Link to={`products/detail/${walmartProduct.productId}`}>
            <ProductCard
              productName={walmartProduct.productName}
              longDescription={walmartProduct.longDescription}
              shortDescription={walmartProduct.shortDescription}
              reviewCount={walmartProduct.reviewCount}
              reviewRating={walmartProduct.reviewRating}
              price={walmartProduct.price}
              productImage="https://images-na.ssl-images-amazon.com/images/I/81t2A6uhm4L._SX425_.jpg"
            />
          </Link>
        </div>
      );
    });

    return (
      <div className="details-main-div">
        <div className="ui relaxed four column grid">
          <div className="row">{renderList}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pagination />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  let walmartProduct = state.productResponse;
  console.log(walmartProduct, "walmartProduct");
  walmartProduct = Object.values(walmartProduct);
  return { walmartProduct };
};
export default connect(mapStateToProps, { fetchProducts })(ProductList);
