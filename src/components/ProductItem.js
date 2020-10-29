import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default class ProductItem extends React.Component {
  render() {
    const { item, addToCart } = this.props;
    return (
      <div className="product-item">
        <div className="content">
          <div className="name">{item.name}</div>
          <div className="price">{item.unitPrice}</div>
        </div>
        <button className="add-to-cart" onClick={addToCart}>
          <FontAwesomeIcon icon={faCartPlus} size="2x" />
        </button>
      </div>
    );
  }
}
