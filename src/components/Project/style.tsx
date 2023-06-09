import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:space-around;
height: 56vh;
width: 19vw;
border: 3px solid rgba(0, 0, 0, 0.5);
border-radius: 16px;
background-color: white;
-webkit-box-shadow: 8px 10px 13px -4px rgba(105,105,105,1);
-moz-box-shadow: 8px 10px 13px -4px rgba(105,105,105,1);
box-shadow: 8px 10px 13px -4px rgba(105,105,105,1);
cursor: pointer;

@keyframes borderAnimation{
  0% {
    border-color:rgba(0, 0, 0, 0.5) ;
  }
  50% {
    border-color: #FFE400;
  }
  100% {
    border-color:rgba(0, 0, 0, 0.5);
  }}

  &:hover {
      animation-name: borderAnimation;
      animation-duration: 1.5s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

img{
max-width:200px;
border-radius: 10px;
margin-bottom: 10px;
filter: saturate(0);
}
`

export const DetailsProject = styled.div`
padding-top: 7px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
height: 18vh;
width: 16vw ;

h2{
  padding-bottom: 5px;
  font-size: 0.95em;
  font-weight: 800;
}

p{
  font-size: 0.7em;
}
`

export const ContainerStyle = styled.div`
.skill{
  width: 18vw ;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-top:15px;
  margin-left:2vw;
}


`

