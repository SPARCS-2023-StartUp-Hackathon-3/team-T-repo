import styled from "styled-components";
import { anime_banner } from "../../../asset";

export const St={
    TopicContainer: styled.div`
    width: 80rem;
    height: 3rem;
    margin: 3rem auto 4rem auto;
    font-size: 3.5rem;
    font-weight: bold;
    display: table;
    flex-direction: column;
    align-items: left;
    display: flex;
    flex-wrap: wrap;
    `,
    TopContainer: styled.div`
    background-image:url(${anime_banner});
    background-size:cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 40rem;
    `
    ,
    PostContainer: styled.div`
    width: 82rem;
    height: 60rem;
    margin: 1% auto 3% auto;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    `
}