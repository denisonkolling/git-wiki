import { styled } from "styled-components";

export const ButtonContainer = styled.button`
border: 1px solid #FAFAFA;
border-radius: 20px;
height: 62px;
width: 80%;
margin: 20px;
cursor: pointer;
font-size: 18px;

&:hover {
  opacity: 0.6;
  background-color: #FAFAFA40;
  scale: 1.1;
}
`