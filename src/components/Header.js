import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export class Header extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div className="header">
        <h1>
          <Link to="/">Buzzed Coffee Shop</Link>
        </h1>
        <div className="cart">
          <Link to="/summary">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            {!!products && <span className="badge">{products}</span>}
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const products = Object.values(state.cart).reduce(
    (total, { amount }) => total + amount,
    0
  );

  return {
    products
  };
};
export default connect(mapStateToProps)(Header);
