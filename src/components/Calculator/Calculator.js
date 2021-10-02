import React, { useState, useEffect } from "react";
import { Row, Col } from "../../styles/Grid";
import { ButtonCalculator } from "../../styles/Buttons";
import useFetch from "../../hooks/useFetch";

const Calculator = () => {
  const [count, setCount] = useState(0);
  const [idStyle, setIdStyle] = useState(0);
  const [backStyle, setBackStyle] = useState("background-0");
  //const { response, loading } = useFetch(`/result`);

  const mod3 = (number) => setIdStyle(Math.abs(number % 3));

  useEffect(() => {
    //setCount(response);
    mod3(count);
    setBackStyle(`background-${idStyle}`);
  }, [count, idStyle]);

  const add = () => submitValue(count + 1);

  const subtract = () => submitValue(count - 2);

  const divide = () => submitValue(count / 3);

  //   if (loading) {
  //     return <div> Cargando información</div>;
  //   }
  const submitValue = (result) => {
    setCount(result);
    // const data = {
    //   value: result,
    // };
    // fetch("http://localhost:8000/api/result", {
    //   method: "POST",
    //   mode: "cors",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setCount(data.data);
    //   });
  };

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
          <ButtonCalculator type="button" onClick={() => submitValue(0)}>
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
