import styled from "styled-components";

export const St = {
  MainPost: styled.section`
    margin-bottom: 13.5rem;
  `,

  FirstPost: styled.article`
    display: flex;
    margin-bottom: 10rem;
  `,

  FirstPostImg: styled.img`
    margin-right: 3.5rem;
  `,

  FirstPostContents: styled.div`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 140%;
  `,

  SecondPost: styled.article`
    display: flex;
  `,

  SecondPostImg: styled.img`
    height: 38rem;
  `,

  SecondPostContents: styled.div`
    margin-right: 3.5rem;
    text-align: right;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 140%;
  `,
};
