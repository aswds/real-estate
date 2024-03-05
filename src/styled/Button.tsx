// Button.js
import styled from "styled-components";

interface ButtonProps {
  isDark?: boolean;
}

const Button = styled.button<ButtonProps>`
  padding: 15px 25px;
  font-size: 16px;
  cursor: pointer;
  height: 100%;
  border-radius: 1000px;
  border-width: 1px;
  border-color: ${(props) => props.theme.gray};
  color: ${(props) => (props.isDark ? "white" : props.theme.textHeadingColor)};
  background-color: ${(props) =>
    props.isDark ? props.theme.textHeadingColor : "white"};
  transition: 200ms all ease-in-out;

  &:hover {
    background-color: ${(props) => (props.isDark ? "#555" : "#eee")};
  }
`;

export default Button;
