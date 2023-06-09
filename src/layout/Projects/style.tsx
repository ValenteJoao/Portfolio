import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
background-color: #ffffff;
padding: 0% 10%;
padding-top:15vh;
`

export const TitleContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
background-color: #ffffff;
height: 15vh;
width: 70vw;

h2{
  font-weight: 800;
  font-size: 2em;
  text-shadow: 22px 12px 0px #ffe60057;
}

div{
  margin-top: 10px;
  width: 119px;
  height: 9px;
  background: #FFE400;
  border-radius: 50px;
}
`

export const NavContainer = styled.nav`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
background-color: #ffffff;
height: 5vh;
width: 80vw;
margin-top: 25px;

button:hover{
  filter: drop-shadow(0px 4px 0px #FFE400);
}
`

export const ContainerProjects = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-flow: row wrap;
height: 60vh;
width: 80vw;
margin: 5px;

`