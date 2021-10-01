import styled from "styled-components";

export const ButtonCalculator = styled.button.attrs((props) => ({
  className: "button button-primary",
  type: props.submit || props.type === "submit" ? "submit" : "button",
}))`
  &.button-primary {
    margin: 4px;
    background-color: black;
    color: white;
    padding: 8px 32px 8px 32px;
    border-radius: 8px;
    text-transform: uppercase;
  }
`;
