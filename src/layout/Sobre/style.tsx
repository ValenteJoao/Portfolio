import styled from "styled-components";

export const PageAbout = styled.div`

@keyframes slide-in-top{0%{transform:translateY(-1000px);opacity:0}100%{transform:translateY(0);opacity:1}}

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: white;
height: 100vh;
padding: 0% 10%;
padding-top: 15vh;
animation:slide-in-top .5s cubic-bezier(.25,.46,.45,.94) both;

@media screen and (max-width: 850px) {
padding: 0;
height: auto;
padding: 60px 60px;
}
`;

export const AboutContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 25vh;
margin-bottom: 40px;

@media screen and (max-width: 850px) {
height: auto;
width: 80vw;
margin-bottom: 40px;
}

div {
width: 119px;
height: 9px;
background: #FFE400;
border-radius: 50px;
margin: 10px;
}

h2 {
font-weight: 800;
font-size: 2.2em;
text-shadow: 22px 12px 0px #ffe6006a;

@media screen and (max-width: 850px) {
  font-size: 2.1em;
}
}

p {
font-style: normal;
font-weight: 500;
font-size: 0.9em;
text-align: center;
color: #474747;

@media screen and (max-width: 850px) {
  text-align: center;
  font-size: 0.8em;
}
}
`;

export const ContainerAboutSkills = styled.div`
display: flex;
flex-direction: row;
width: 90vw;
height: 50vh;
justify-content: space-between;
padding: 0% 10%;

@media screen and (max-width: 850px) {
padding: 0;
flex-direction: column;
justify-content: center;
align-items: center;
height: auto;
width: 80vw;
}
`;

export const SectionAbout = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
font-style: normal;
font-weight: 500;
font-size: 0.8em;
color: #474747;
width: 380px;

@media screen and (max-width: 850px) {
justify-content: center;
height: auto;
width: 80vw;
margin-bottom: 40px;
}

p {
width: 350px;
@media screen and (max-width: 850px) {
color: #5c5b5be2;
}
}
`;

export const LineAbout = styled.div`
width: 7px;
height: 60px;
background: #ffe400;
box-shadow: 0px 52px 0px #464646;
border-radius: 50px;

@media screen and (max-width: 850px) {
margin-right: 10px;
}
`;

export const SkillsContainer = styled.div`
width: 400px;
height: 250px;
padding-right: 20px;

@media screen and (max-width: 850px) {
height: auto;
padding-right: 0;
width: 80vw;
}

h3 {
margin-bottom: 10px;
font-style: normal;
font-weight: 900;
font-size: 1.3em;
}
`;

export const Skills = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;

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
`;