import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  background-color: #090E16;
  height: 20vh;

  @media screen and (max-width: 850px) {
    justify-content: space-around;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 53.5vw;

  @media screen and (max-width: 850px) {
    width: 100vw;
    height: 8vh;
    flex-direction: column;
  }

  h6 {
    margin-left: 30px;
    font-size: 0.9em;
    font-weight: 500;
    color: white;

    @media screen and (max-width: 850px) {
      margin-left: 0;
    }
  }

  .icons {
    display: flex;
    justify-content: space-around;
    width: 7vw;
  }
`