import React from "react";

import Counter from "./Counter";

export default class OrderItem extends React.Component {
  render() {
    const {
      item: { name, unitPrice, amount },
      setAmount,
      onDelete
    } = this.props;

    return (
      <div className="order-item">
        <div className="name">{name}</div>
        <div className="content">
          <div className="actions">
            <Counter value={amount} onChange={setAmount} />
            <button className="delete-button" onClick={onDelete}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
          <div className="price">{unitPrice * amount}</div>
        </div>
      </div>
    );
  }
}
