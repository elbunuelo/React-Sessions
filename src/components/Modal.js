import React from "react";

export default class Modal extends React.Component {
  render() {
    const { onConfirm, onCancel, children } = this.props;
    return (
      <div className="modal-component">
        <div className="content">
          <div className="text">{children}</div>
          <div className="actions">
            <button className="cancel" onClick={onCancel}>
              Cancel
            </button>
            <button className="confirm" onClick={onConfirm}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  }
}
