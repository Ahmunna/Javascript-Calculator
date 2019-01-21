import React, { Component } from "react";
import "./style.css";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mathematicalExpression: "",
      screenDisplay: "0"
    };
  }



  handleClick = char => {
    this.setState({
      mathematicalExpression: this.state.mathematicalExpression + char
    });
  };
  handleEquals = () => {
    let result = "syntax error";
    try {
      result = eval(this.state.mathematicalExpression);
    } catch (e) {
      if (e.name === "SyntaxError") {
        console.log("error")
      }
    }

    this.setState({
      screenDisplay: result,
      mathematicalExpression: result
    });
  };
  handleClear = () => {
    this.setState({
      screenDisplay: "0",
      mathematicalExpression: ""
    });
  };
  render() {
    return (
      <div
        className="mainContainer"
        style={{
          height: `${window.innerHeight}px`
        }}
      >
        <div id="calculator">
          <div id="display">
            {this.state.mathematicalExpression}
            <span id="span">{this.state.screenDisplay}</span>
          </div>
          <div id="symbols">
            <button
              className="button"
              id="clear"
              onClick={() => this.handleClear()}
            >
              AC
            </button>
            <button
              className="button"
              id="divide"
              onClick={() => this.handleClick("/")}
            >
              /
            </button>
            <button
              className="button"
              id="multiply"
              onClick={() => this.handleClick("*")}
            >
              *
            </button>
            <div className="line-break" />
            <button
              className="button"
              id="seven"
              onClick={() => this.handleClick("7")}
            >
              7
            </button>
            <button
              className="button"
              id="eight"
              onClick={() => this.handleClick("8")}
            >
              8
            </button>
            <button
              className="button"
              id="nine"
              onClick={() => this.handleClick("9")}
            >
              9
            </button>
            <button
              className="button"
              id="add"
              onClick={() => this.handleClick("+")}
            >
              +
            </button>
            <div className="line-break" />
            <button
              className="button"
              id="four"
              onClick={() => this.handleClick("4")}
            >
              4
            </button>
            <button
              className="button"
              id="five"
              onClick={() => this.handleClick("5")}
            >
              5
            </button>
            <button
              className="button"
              id="six"
              onClick={() => this.handleClick("6")}
            >
              6
            </button>
            <button
              className="button"
              id="subtract"
              onClick={() => this.handleClick("-")}
            >
              -
            </button>
            <div className="line-break" />
            <button
              className="button"
              id="one"
              onClick={() => this.handleClick("1")}
            >
              1
            </button>
            <button
              className="button"
              id="two"
              onClick={() => this.handleClick("2")}
            >
              2
            </button>
            <button
              className="button"
              id="three"
              onClick={() => this.handleClick("3")}
            >
              3
            </button>
            <button
              className="button"
              id="decimal"
              onClick={() => this.handleClick(".")}
            >
              .
            </button>
            <div className="line-break" />
            <button
              className="button"
              style={{
                flexGrow: "3",
                backgroundColor: "#004466"
              }}
              id="equals"
              onClick={() => this.handleEquals()}
            >
              =
            </button>
            <button
              className="button"
              id="zero"
              onClick={() => this.handleClick("0")}
            >
              0
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
