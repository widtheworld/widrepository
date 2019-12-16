import React, { Component } from "react";
import ClearButton from "./ClearButton";
import Button from "./Button";
import Input from "./Input";

class App extends Component {
  constructor(prpos) {
    super(prpos);
    this.state = {
      input: "",
      perviousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }
  addToInput = val => {
    this.setState({
      input: this.state.input + val
    });
  };
  addZeroInput = val => {
    if (this.state.input !== "") {
      this.setState({
        input: this.state.input + val
      });
    }
  };
  addDecimal = val => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({
        input: this.state.input + val
      });
    }
  };
  clearInput = () => {
    this.setState({
      input: ""
    });
  };
  add = () => {
    this.state.perviousNumber = this.state.input;
    this.setState({
      input: ""
    });
    this.state.operator = "plus";
  };
  cross = () => {
    this.state.perviousNumber = this.state.input;
    this.setState({
      input: ""
    });
    this.state.operator = "cross";
  };
  minus = () => {
    this.state.perviousNumber = this.state.input;
    this.setState({
      input: ""
    });
    this.state.operator = "minus";
  };
  divide = () => {
    this.state.perviousNumber = this.state.input;
    this.setState({
      input: ""
    });
    this.state.operator = "divide";
  };
  evaluate = () => {
    this.state.currentNumber = this.state.input;
    if (this.state.operator == "plus") {
      this.setState({
        input:
          parseInt(this.state.perviousNumber) +
          parseInt(this.state.currentNumber)
      });
    }
    if (this.state.operator == "cross") {
      this.setState({
        input:
          parseInt(this.state.perviousNumber) *
          parseInt(this.state.currentNumber)
      });
    }
    if (this.state.operator == "minus") {
      this.setState({
        input:
          parseInt(this.state.perviousNumber) -
          parseInt(this.state.currentNumber)
      });
    }
    if (this.state.operator == "divide") {
      this.setState({
        input:
          parseInt(this.state.perviousNumber) /
          parseInt(this.state.currentNumber)
      });
    }
  };
  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.cross}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.minus}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
