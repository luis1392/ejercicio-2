import React, { useState, useEffect } from "react";
import { Row, Col } from "../../styles/Grid";
import { ButtonCalculator } from "../../styles/Buttons";

const Calculator = () => {
  const [count, setCount] = useState(0);
  const [idStyle, setIdStyle] = useState(0);
  const [backStyle, setBackStyle] = useState("background-0");

  const mod3 = (number) => setIdStyle(Math.abs(number % 3));

  useEffect(() => {
    mod3(count);
    setBackStyle(`background-${idStyle}`);
  }, [count, idStyle]);

  const add = () => setCount(count + 1);

  const subtract = () => setCount(count - 2);

  const divide = () => setCount(count / 3);

  return (
    <Row>
      <Col xl="12" lg="12" md="12" sm="12">
        <div className="block-cal">
          <ButtonCalculator type="button" onClick={add}>
            Add
          </ButtonCalculator>
          <ButtonCalculator type="button" onClick={subtract}>
            Subtract
          </ButtonCalculator>
          <ButtonCalculator type="button" onClick={divide}>
            Divide
          </ButtonCalculator>
          <ButtonCalculator type="button" onClick={() => setCount(0)}>
            Reset
          </ButtonCalculator>
        </div>

        <div className="block-cal">
          <div className={`result ${backStyle}`}>{count}</div>
        </div>
      </Col>
    </Row>
  );
};

export default Calculator;
