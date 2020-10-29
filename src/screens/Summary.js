import React from "react";
import { connect } from "react-redux";

import OrderItem from "../components/OrderItem";
import Modal from "../components/Modal";
import { DeleteFromCart, ChangeAmount } from "../actions";

export class Summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemToDelete: null
    };
  }

  setAmount = (item, amount) => {
    const { dispatch } = this.props;
    dispatch(ChangeAmount(item, amount));
  };

  showConfirmation = item => this.setState({ itemToDelete: item });

  closeConfirmation = () => {
    this.setState({ itemToDelete: null });
  };

  deleteItem = itemToDelete => {
    const { dispatch } = this.props;
    dispatch(DeleteFromCart(itemToDelete));
    this.setState({ itemToDelete: null });
  };

  render() {
    const { itemToDelete } = this.state;
    const cart = Object.values(this.props.cart);

    return (
      <>
        <div className="screen-title">Order Summary</div>
        {cart.length === 0 && (
          <div className="empty-cart">There's nothing in your cart!</div>
        )}
        {cart.map(({ item, amount }, index) => (
          <OrderItem
            key={item.id}
            item={item}
            amount={amount}
            setAmount={amount => this.setAmount(item, amount)}
            onDelete={() => this.showConfirmation(item)}
          />
        ))}
        <div className="total">
          <div>Total</div>
          <div className="value">
            {cart
              .reduce(
                (total, { item, amount }) => total + item.unitPrice * amount,
                0
              )
              .toFixed(2)}
          </div>
        </div>
        <button className="check-out">Check Out</button>
        {itemToDelete && (
          <Modal
            onCancel={this.closeConfirmation}
            onConfirm={() => this.deleteItem(itemToDelete)}
          >
            Are you sure you want to remove {itemToDelete.name}?
          </Modal>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(Summary);
