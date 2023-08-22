import React, { Component } from "react";
import Card from "./Card";

class Calculator extends Component {
  state = {
    initNumber: 0,
    newNumber: "",
    operator: "",
    value: 0,
  };

  checkInput = (val) => {
    if (this.state.operator !== "" && this.state.newNumber === "") {
      this.setState({ operator: val });
    } else {
      this.handleCalculation(val);
    }
  };

  handleClick = (val) => {
    let newNumber;
    let value;

    switch (val) {
      case "/":
        this.checkInput(val);
        break;
      case "-":
        this.checkInput(val);
        break;
      case "+":
        this.checkInput(val);
        break;
      case "*":
        this.checkInput(val);
        break;
      case "=":
        this.checkInput(val);
        break;
      case "DEL":
        newNumber =
          this.state.newNumber.length > 1
            ? this.state.newNumber.substring(0, this.state.newNumber.length - 1)
            : 0;
        value = newNumber;
        this.setState({ newNumber, value });
        break;
      case "C":
        newNumber = 0;
        value = newNumber;
        this.setState({ newNumber, value });
        break;
      default:
        newNumber =
          this.state.newNumber === 0 ? val : this.state.newNumber + val;
        value = newNumber;
        this.setState({ newNumber, value });
        break;
    }
  };

  performCalculation = () => {
    if (this.state.operator !== "") {
      let initNumber = null;
      switch (this.state.operator) {
        case "/":
          initNumber =
            parseFloat(this.state.initNumber) /
            parseFloat(this.state.newNumber);
          this.setState({ initNumber });
          break;
        case "+":
          initNumber =
            parseFloat(this.state.initNumber) +
            parseFloat(this.state.newNumber);
          this.setState({ initNumber });
          break;
        case "-":
          initNumber =
            parseFloat(this.state.initNumber) -
            parseFloat(this.state.newNumber);
          this.setState({ initNumber });
          break;
        case "*":
          initNumber =
            parseFloat(this.state.initNumber) *
            parseFloat(this.state.newNumber);
          this.setState({ initNumber });
          break;
        default:
          break;
      }
      const value = initNumber;
      this.setState({ value });
    } else {
      const initNumber = this.state.newNumber === "" ? 0 : this.state.newNumber;
      this.setState({ initNumber });
      const value = this.state.newNumber;
      this.setState({ value });
    }
    const newNumber = "";
    this.setState({ newNumber });
  };

  handleCalculation = (op) => {
    let operator = null;
    this.performCalculation();
    switch (op) {
      case "/":
        operator = "/";
        this.setState({ operator });
        break;
      case "+":
        operator = "+";
        this.setState({ operator });
        break;
      case "-":
        operator = "-";
        this.setState({ operator });
        break;
      case "*":
        operator = "*";
        this.setState({ operator });
        break;
      default:
        operator = "";
        this.setState({ operator });
        break;
    }
  };

  render() {
    return (
      <div
        className="container-sm text-center my-5"
        style={{ maxWidth: "20rem" }}
      >
        <Card
          calculate={this.handleCalculation}
          value={this.state.value}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Calculator;
