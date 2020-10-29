import React from "react";

export default class Counter extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <div className="counter">
        <button className="element" onClick={() => onChange(value - 1)}>
          -
        </button>
        <div className="element">{value}</div>
        <button className="element" onClick={() => onChange(value + 1)}>
          +
        </button>
      </div>
    );
  }
}
