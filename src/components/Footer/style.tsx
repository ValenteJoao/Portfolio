import { styled } from "styled-components";

export const Container = styled.footer`
display: flex;
align-items: center;
background-color: #090E16;
height: 20vh;
`

export const Content = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 53.5vw;

h6{
  margin-left: 30px;
  font-size: 0.9em;
  font-weight: 500;
  color:white;
}

.icons{
  display: flex;
  justify-content: space-around;
  width: 7vw;

}
`