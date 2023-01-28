import styled from "styled-components";
import {nickname} from "../../asset";
import {nickname_ctn} from "../../asset";
import {nickname_intro} from "../../asset";
import {nickbtn} from "../../asset";

export const St = {
    Container:styled.div`
    width: 100%;
    height:85.3125rem;
    background-image: url(${nickname});
    background-size: cover;
    padding-top:10%;
    `
    ,
    Intro_Container:styled.form`
    width: 63.8125rem;
    height:40.5625rem;
    background-image: url(${nickname_ctn});
    background-size: cover;
    display:flex;
    flex-direction: column;
    margin:auto;
    `
    ,
    Intro:styled.div`
    width: 63.8125rem;
    height:16.625rem;
    background-image: url(${nickname_intro});
    background-size: cover;
    margin-top:4rem;
    margin-bottom:1em;
    `
    ,
    realN :styled.div`
    display:flex;
    flex-direction: row;
    margin:auto;
    `
    ,
    nickinput:styled.input `
    width: 33.07rem;
    border:none;
    font-size: 1rem;
    height: 3rem;
    align-items: center;
    background-color: #d9d9d9;
    overflow: auto;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    }

`,
    nickbtn:styled.button`
    background-image:url(${nickbtn});
    background-size:cover;
    background-repeat: no-repeat;
    width: 9rem;
    height: 3rem;
    margin:auto;
    border: 0;
    background-color: transparent;

     `,
}