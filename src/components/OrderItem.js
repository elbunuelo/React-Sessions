import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import Counter from "./Counter";

export default class OrderItem extends React.Component {
  render() {
    const {
      item: { name, unitPrice },
      amount,
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
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
          <div className="price">{unitPrice * amount}</div>
        </div>
      </div>
    );
  }
}
