import styled from 'styled-components';
import React from 'react';
const Button = styled.button` display: inline;
font-size:medium;
background: rgb(245, 65, 155);
box-shadow: 5px 5px 5px lightgray;
transition: all 0.2s ease-in-out;
color: white;
border: 0;
border-radius: 10px;
margin-left: 5px;
 &:hover {
    box-shadow: -2px -2px 5px white, 2px 2px 5px gray;
  }
  
  &:active {
    box-shadow: inset 1px 1px 2px white, inset -1px -1px 2px gray;
  }`

  export default Button;
