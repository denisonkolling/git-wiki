import { styled } from "styled-components";

export const ItemContainer = styled.div`

width: 80%;

h3 {
  font-size: 32px;
  color: #FAFAFA;
}

p {
  font-size: 16px;
  color: #FAFAFA60;
  margin-bottom: 20px;
}

a {
  color: #BDC3C7;
  margin-top: 20px;
  text-decoration: none;
}

a.remover {
  color: #A569BD;
  margin-top: 20px;
  text-decoration: none;
}

hr {
  color: #FAFAFA60;
  margin: 20px 0;
}
`

export const RemoveButton = styled.button`
  border: 0;
  cursor: pointer;
  color: #AEB6BF; 
`