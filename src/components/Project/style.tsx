import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 56vh;
  width: 19vw;
  border: 3px solid rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  background-color: white;
  box-shadow: 8px 10px 13px -4px rgba(105, 105, 105, 1);
  cursor: pointer;

  @media screen and (max-width: 850px) {
    height: 50vh;
    width: 75vw;
    margin: 5px;
    cursor: none;
  }

  @keyframes borderAnimation {
    0% {
      border-color: rgba(0, 0, 0, 0.5);
    }
    50% {
      border-color: #FFE400;
    }
    100% {
      border-color: rgba(0, 0, 0, 0.5);
    }
  }

  &:hover {
    animation-name: borderAnimation;
    animation-duration: 1.5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @media screen and (max-width: 850px) {
    animation-name: borderAnimation;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  img {
    max-width: 200px;
    border-radius: 10px;
    margin-bottom: 10px;
    filter: saturate(0);
  }
`;

export const DetailsProject = styled.div`
  padding-top: 7px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 18vh;
  width: 16vw;

  @media screen and (max-width: 850px) {
    padding: 5px;
    height: auto;
    align-items: center;
    width: 65vw;
  }

  h2 {
    padding-bottom: 5px;
    font-size: 0.95em;
    font-weight: 800;

    @media screen and (max-width: 850px) {
      font-size: 1.5em;
      text-align: center;
      padding-bottom: 5px;
    }
  }

  p {
  font-size: 0.8rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

    @media screen and (max-width: 850px) {
      text-align: center;
    }
  }
`;

export const ContainerStyle = styled.div`
  .skill {
    width: 18vw;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    padding-top: 15px;
    margin-left: 2vw;

    @media screen and (max-width: 850px) {
      padding: 0;
      width: 75vw;
      align-items: center;
      justify-content: center;
    }
  }
`