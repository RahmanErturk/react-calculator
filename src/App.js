import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("0");
  const [prev, setPrev] = useState("");

  const inputNum = (e) => {
    if (input === "0") {
      setInput(input.concat(e.target.innerText).slice(1));
    } else setInput(input.concat(e.target.innerText));
  };

  const decimal = (e) => {
    setInput(input.concat(e.target.innerText));
    if (input === "") setInput("0.");
    if (input.includes(".")) setInput(input);
  };

  const del = (e) => {
    if (input.length > 1) {
      setInput(input.slice(0, input.length - 1));
    } else {
      setInput("0");
    }

    if (input === "") {
      setPrev("");
      setInput(prev.slice(0, input.length - 1));
    }
  };

  const reset = (e) => {
    setPrev("");
    setInput("0");
  };

  const operatorType = (e) => {
    if (input !== "0" && input !== "") {
      setPrev(input + e.target.innerText);
      setInput("");
    }
  };

  const equal = (e) => {
    switch (prev.slice(prev.length - 1)) {
      case "/":
        setInput(prev.slice(0, prev.length - 1) / input);
        setPrev("");
        break;
      case "*":
        setInput(prev.slice(0, prev.length - 1) * input);
        setPrev("");
        break;
      case "-":
        setInput(prev.slice(0, prev.length - 1) - input);
        setPrev("");
        break;
      case "+":
        setInput((+prev.slice(0, prev.length - 1) + +input).toString());
        setPrev("");
        break;
      case "%":
        setInput(prev.slice(0, prev.length - 1) * (input / 100));
        setPrev("");
        break;
      default:
        setInput(input);
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="calculator">
        <div className="display">
          <div className="previous">{prev}</div>
          <div className="current">{input}</div>
        </div>
        <div className="keypad">
          <Container>
            <Row>
              <Col className="col" sm={3}>
                <button className="btn reset" onClick={reset}>
                  AC
                </button>
              </Col>
              <Col className="col" sm={3}>
                <button className="btn del" onClick={del}>
                  DEL
                </button>
              </Col>
              <Col className="col" sm={3}>
                <button className="btn percent" onClick={operatorType}>
                  %
                </button>
              </Col>
              <Col className="col" sm={3}>
                <button className="btn operators" onClick={operatorType}>
                  /
                </button>
              </Col>
            </Row>
            <Row>
              <Col className="col" sm={3}>
                <button className="btn digit" onClick={inputNum}>
                  7
                </button>
              </Col>
              <Col className="col" sm={3}>
                <button className="btn digit" onClick={inputNum}>
                  8
                </button>
              </Col>
              <Col className="col" sm={3}>
                <button className="btn digit" onClick={inputNum}>
                  9
                </button>
              </Col>
              <Col className="col" sm={3}>
                <button className="btn operators" onClick={operatorType}>
                  *
                </button>
              </Col>
            </Row>
            <Row>
              <Col className="col" sm={3}>
                <button className="btn digit" onClick={inputNum}>
                  4
                </button>
              </Col>
              <Col className="col" sm={3}>
                <button className="btn digit" onClick={inputNum}>
                  5
                </button>
              </Col>
              <Col className="col" sm={3}>
                <button className="btn digit" onClick={inputNum}>
                  6
                </button>
              </Col>
              <Col className="col" sm={3}>
                <button className="btn operators" onClick={operatorType}>
                  -
                </button>
              </Col>
            </Row>
            <Row>
              <Col className="col" sm={3}>
                <button className="btn digit" onClick={inputNum}>
                  1
                </button>
              </Col>
              <Col className="col" sm={3}>
                <button className="btn digit" onClick={inputNum}>
                  2
                </button>
              </Col>
              <Col className="col" sm={3}>
                <button className="btn digit" onClick={inputNum}>
                  3
                </button>
              </Col>
              <Col className="col" sm={3}>
                <button className="btn operators" onClick={operatorType}>
                  +
                </button>
              </Col>
            </Row>
            <Row>
              <Col className="col" sm={6}>
                <button className="btn digit" onClick={inputNum}>
                  0
                </button>
              </Col>
              <Col className="col" sm={3}>
                <button className="btn decimal" onClick={decimal}>
                  .
                </button>
              </Col>
              <Col className="col" sm={3}>
                <button className="btn equal" onClick={equal}>
                  =
                </button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
