import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ProductItem from "../components/ProductItem";
import { AddToCart } from "../actions";

export class Products extends React.Component {
  render() {
    const { dispatch, items, total } = this.props;
    return (
      <div>
        {items.map(item => (
          <ProductItem
            item={item}
            addToCart={() => dispatch(AddToCart(item))}
          />
        ))}
        <Link to="/summary">
          <div className="cart-total">
            Cart Total: <span className="value">{total}</span>
          </div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const total = Object.values(state.cart).reduce(
    (total, { item, amount }) => total + item.unitPrice * amount,
    0
  );
  return {
    items: state.items,
    total: total.toFixed(2)
  };
};

export default connect(mapStateToProps)(Products);
