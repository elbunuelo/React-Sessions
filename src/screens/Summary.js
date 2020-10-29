import React from "react";

import OrderItem from "../components/OrderItem";
import Modal from "../components/Modal";

export default class Summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemToDelete: null,
      cart: [
        {
          id: 1,
          name: "Large Coffee",
          amount: 1,
          unitPrice: 1.75
        },
        {
          id: 2,
          name: "Small Latte",
          amount: 2,
          unitPrice: 3.98
        },
        {
          id: 3,
          name: "Cream Cheese Bagel",
          amount: 3,
          unitPrice: 4.0
        }
      ]
    };
  }

  setAmount = (index, amount) => {
    this.setState(state => {
      const cart = [...state.cart];
      cart[index].amount = amount;

      return { cart };
    });
  };

  showConfirmation = item => this.setState({ itemToDelete: item });

  closeConfirmation = () => {
    this.setState({ itemToDelete: null });
  };

  deleteItem = itemToDelete => {
    this.setState(state => {
      const { cart } = state;
      return { cart: cart.filter(i => i.id !== itemToDelete.id) };
    });
    this.closeConfirmation();
  };

  render() {
    const { cart, itemToDelete } = this.state;
    return (
      <div className="screen">
        <div className="screen-title">Order Summary</div>
        {cart.map((item, index) => (
          <OrderItem
            key={item.id}
            item={item}
            setAmount={amount => this.setAmount(index, amount)}
            onDelete={() => this.showConfirmation(item)}
          />
        ))}
        <div className="total">
          <div>Total</div>
          <div className="value">
            {cart.reduce(
              (total, item) => total + item.unitPrice * item.amount,
              0
            )}
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
      </div>
    );
  }
}
