import styled from 'styled-components';
import React from 'react';
const Button = styled.button` display: inline;
font-size:medium;
background: #ff4b33f1;
box-shadow: 5px 5px 5px lightgray;
transition: all 0.2s ease-in-out;
color: white;
border: 0;
height:30px;
border-radius: 5px;
margin-left: 5px;
margin-right:4px;
 &:hover {
    box-shadow: -2px -2px 5px white, 2px 2px 5px gray;
  }
  
  &:active {
    box-shadow: inset 1px 1px 2px white, inset -1px -1px 2px gray;
  }`

  export default Button;
