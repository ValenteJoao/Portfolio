import styled from "styled-components";

export const PageAbout = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: white;
height: 100vh;
padding: 0% 10%;
padding-top: 15vh;
`

export const AboutContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 25vh;
margin-bottom: 40px;

div{
  width: 119px;
  height: 9px;
  background: #FFE400;
  border-radius: 50px;
  margin: 10px;
}

h2{
  font-weight: 800;
  font-size: 2.2em;
  text-shadow: 22px 12px 0px #ffe6006a;
}
p{
  font-style: normal;
  font-weight: 500;
  font-size: 0.9em;
  text-align: center;
  color: #474747;
}
`
export const ContainerAboutSkills = styled.div`
display: flex;
flex-direction: row;
width: 90vw;
height: 50vh;
justify-content: space-between;
padding: 0% 10%;

`

export const SectionAbout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-style: normal;
  font-weight: 500;
  font-size: 0.8em;
  color: #474747;
  width: 380px;

  p{
    width: 350px;
  }
`
export const LineAbout = styled.div`
width: 7px;
height: 60px;
background: #FFE400;
box-shadow: 0px 52px 0px #464646;
border-radius: 50px;
`


export const SkillsContainer = styled.div`
width: 400px;
height: 250px;
padding-right: 20px;

h3{
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 900;
  font-size: 1.3em;
}
`

export const Skills = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`

export const SocialmediaContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
margin-top: 30px;
width: 140px;
height: 50px;
background-color: #464646;
border-radius: 20px;
filter: drop-shadow(16px 12px 0px #FFE400);
`