import React, { Component } from "react";

class Input extends Component {
  handleOnChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.props.onChange(name, value);
  };

  render() {
    const { type, name, placeholder, value, required } = this.props;
    return (
      <input
        type={type || "text"}
        className="form-control"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value || ""}
        onChange={this.handleOnChange}
        required={required}
      />
    );
  }
}

export default Input;
