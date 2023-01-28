import styled from "styled-components";
import { art_main_banner, today_pick_banner, best_image} from "../../asset";

export const St={
    TopContainer: styled.div`
    background-image:url(${art_main_banner});
    background-size:cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 35rem;
    `
    ,
    TopicContainer: styled.div`
    width: 80rem;
    height: 3rem;
    margin: 3rem auto 3rem auto;
    font-size: 2.5rem;
    font-weight: bold;
    display: table;
    flex-direction: column;
    align-items: left;
    display: flex;
    flex-wrap: wrap;
    `,
    PostContainer: styled.div`
    width: 80rem;
    height: 15rem;
    margin: 1% auto 1% auto;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid red;
    `,
    TopContainer2: styled.div`
    background-image:url(${today_pick_banner});
    background-repeat: no-repeat;
    background-size:contain;
    width: 80rem;
    height: 55rem;
    margin: auto;
    text-align: center;
    `,
    TopContainer3: styled.div`
    background-image:url(${best_image});
    background-repeat: no-repeat;
    background-size:contain;
    width: 80rem;
    height: 55rem;
    margin: auto;
    text-align: center;
    `

}