import React, { Component } from "react";
import "./App.css";
let add = 0;
let min = 0;
let mul = 0;
let div = 0;
class App extends Component {
  state = {
    number: 0,
    incrementNumber: 0,
    Proces: 0,
    lastOperator: "",
  };

  input = (e) => {
    e.preventDefault();
    // this.setState((prevState) => ({
    //   // number: e.target.value,
    //   number: prevState.number + parseInt(e.target.value),
    // }));
    if (this.state.Proces === 0) {
      this.setState({
        Proces: e.target.value,
      });
    } else {
      this.setState({
        Proces: this.state.Proces + e.target.value,
      });
    }

    if (this.state.lastOperator == "" && this.state.number !== 0) {
      this.setState({
        incrementNumber: parseInt(e.target.value),
        Proces: parseInt(e.target.value),
        number: 0,
      });
    }

    if (this.state.incrementNumber === 0) {
      this.setState({
        incrementNumber: parseInt(e.target.value),
      });
    } else {
      this.setState({
        incrementNumber: this.state.incrementNumber + e.target.value,
      });
    }
  };

  sum = () => {
    // this.setState({
    //   number: parseInt(this.state.incrementNumber),
    // });
    console.log(this.state.incrementNumber);
    if (this.state.lastOperator == "+") {
      this.setState((prevState) => ({
        number:
          parseInt(prevState.number) + parseInt(this.state.incrementNumber),
        incrementNumber: 0,
        lastOperator: "",
      }));
    } else if (this.state.lastOperator == "-") {
      this.setState((prevState) => ({
        number:
          parseInt(prevState.number) - parseInt(this.state.incrementNumber),
        incrementNumber: 0,
        lastOperator: "",
      }));
    } else if (this.state.lastOperator == "*") {
      this.setState((prevState) => ({
        number:
          parseInt(prevState.number) * parseInt(this.state.incrementNumber),
        incrementNumber: 0,
        lastOperator: "",
      }));
    } else if (this.state.lastOperator == "/") {
      this.setState((prevState) => ({
        number:
          parseInt(prevState.number) / parseInt(this.state.incrementNumber),
        incrementNumber: 0,
        lastOperator: "",
      }));
    }
  };

  add = (e) => {
    // this.setState((prevState) => ({
    //   number: prevState.number + parseInt(this.state.incrementNumber),
    // }));
    if (this.state.incrementNumber !== 0) {
      add = add + parseInt(this.state.incrementNumber);
      if (this.state.number == 0) {
        this.setState({
          number: this.state.incrementNumber,
          incrementNumber: 0,
          Proces: this.state.Proces + e.target.value,
          lastOperator: this.state.lastOperator + e.target.value,
        });
      } else {
        this.setState({
          number: parseInt(this.state.number) + add,
          incrementNumber: 0,
          Proces: this.state.Proces + e.target.value,
          lastOperator: e.target.value,
        });
      }
    } else {
      this.setState({
        Proces: this.state.Proces + e.target.value,
        lastOperator: e.target.value,
      });
    }
    // this.sum();

    console.log(add);
    add = 0;
    // console.log(Number(add));
  };

  min = (e) => {
    // this.setState((prevState) => ({
    //   number: prevState.number + parseInt(this.state.incrementNumber),
    // }));
    if (this.state.incrementNumber !== 0) {
      min = min + parseInt(this.state.incrementNumber);
      if (this.state.number == 0) {
        this.setState({
          number: this.state.incrementNumber,
          incrementNumber: 0,
          Proces: this.state.Proces + e.target.value,
          lastOperator: this.state.lastOperator + e.target.value,
        });
      } else {
        this.setState({
          number: parseInt(this.state.number) - min,
          incrementNumber: 0,
          Proces: this.state.Proces + e.target.value,
          lastOperator: e.target.value,
        });
      }
    } else {
      this.setState({
        Proces: this.state.Proces + e.target.value,
        lastOperator: e.target.value,
      });
    }
    console.log(min);
    min = 0;
  };

  mul = (e) => {
    // this.setState((prevState) => ({
    //   number: prevState.number + parseInt(this.state.incrementNumber),
    // }));
    if (this.state.incrementNumber !== 0) {
      mul = mul + parseInt(this.state.incrementNumber);
      if (this.state.number == 0) {
        this.setState({
          number: this.state.incrementNumber,
          incrementNumber: 0,
          Proces: this.state.Proces + e.target.value,
          lastOperator: this.state.lastOperator + e.target.value,
        });
      } else {
        this.setState({
          number: parseInt(this.state.number) * mul,
          incrementNumber: 0,
          Proces: this.state.Proces + e.target.value,
          lastOperator: e.target.value,
        });
      }
    } else {
      this.setState({
        Proces: this.state.Proces + e.target.value,
        lastOperator: e.target.value,
      });
    }
    console.log(mul);
    mul = 0;
  };

  clear = (e) => {
    this.setState({
      number: 0,
      incrementNumber: 0,
      Proces: 0,
      lastOperator: "",
    });
  };

  div = (e) => {
    // this.setState((prevState) => ({
    //   number: prevState.number + parseInt(this.state.incrementNumber),
    // }));
    if (this.state.incrementNumber !== 0) {
      div = div + parseInt(this.state.incrementNumber);
      if (this.state.number == 0) {
        this.setState({
          number: this.state.incrementNumber,
          incrementNumber: 0,
          Proces: this.state.Proces + e.target.value,
          lastOperator: this.state.lastOperator + e.target.value,
        });
      } else {
        this.setState({
          number: parseInt(this.state.number) / div,
          incrementNumber: 0,
          Proces: this.state.Proces + e.target.value,
          lastOperator: e.target.value,
        });
      }
    } else {
      this.setState({
        Proces: this.state.Proces + e.target.value,
        lastOperator: e.target.value,
      });
    }
    console.log(mul);
    mul = 0;
  };

  selectAll = (e) => {
    e.preventDefault();
    e.target.focus();
    e.target.select();
  };

  render() {
    return (
      <>
        <h1 className="title">Kalkulator Glints</h1>
        <div className="calculator">
          <h1 className="output">Last Operator: {this.state.lastOperator}</h1>
          <h1 className="output">proces: {this.state.Proces}</h1>
          <h1 className="output">
            Increment: {this.state.incrementNumber}
            {/* {console.log(1 + +"20")} */}
          </h1>
          <h1 className="output">Output: {this.state.number}</h1>
          {/* <input
            disabled
            className="output"
            onClick={this.selectAll}
            onChange={this.input}
            placeholder="Masukkan Nilai"
          ></input> */}
          <div className="button-calculator">
            <br />
            <button onClick={this.input} value="7">
              7
            </button>
            <button onClick={this.input} value="8">
              8
            </button>
            <button onClick={this.input} value="9">
              9
            </button>
            <button onClick={this.add} value="+" className="operator">
              +
            </button>
            <br />
            <button onClick={this.input} value="4">
              4
            </button>
            <button onClick={this.input} value="5">
              5
            </button>
            <button onClick={this.input} value="6">
              6
            </button>
            <button onClick={this.min} value="-" className="operator">
              -
            </button>
            <br />
            <button onClick={this.input} value="1">
              1
            </button>
            <button onClick={this.input} value="2">
              2
            </button>
            <button onClick={this.input} value="3">
              3
            </button>
            <button onClick={this.mul} value="*" className="operator">
              *
            </button>
            <br />
            <button onClick={this.clear} value="C" className="operator">
              C
            </button>
            <button onClick={this.input} value="0">
              0
            </button>
            <button onClick={this.div} value="/" className="operator">
              /
            </button>
            <button onClick={this.sum} value="" className="operator">
              =
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
