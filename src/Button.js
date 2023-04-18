import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  // props.color가 있으면 props.color를, 그렇지 않으면 배경을 흰색으로
  background: ${(props) => props.color || "white"};
  // props.size가 "big" 있으면 200px를, 그렇지 않으면 100px를 너비로 사용
  width: ${(props) => (props.size === "big" ? "200px" : "100px")};
  // props.size가 "big" 있으면 80px를, 그렇지 않으면 40px를 높이로 사용
  height: ${(props) => (props.size === "big" ? "80px" : "40px")};
`;

const Button = ({ color, size, text }) => (
  //위에서 작성한 props + text를 받아 textContent로 사용
  <StyledButton color={color} size={size}>{text}</StyledButton>
);
export default Button;
