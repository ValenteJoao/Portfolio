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

img{
max-width:200px;
border-radius: 10px;
margin-bottom: 10px;
filter: saturate(0);

}
`

export const DetailsProject = styled.div`
padding-top: 10px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: flex-start;
height: 24vh;
width: 16vw ;
margin-bottom: 10px;

h2{
  font-size: 1.2em;
}

p{
  font-size: 0.8em;
}
`

export const ContainerStyle = styled.div`
.skill{
  width: 16vw ;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}


`

