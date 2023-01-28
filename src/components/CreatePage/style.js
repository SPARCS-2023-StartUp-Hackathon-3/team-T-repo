import styled from "styled-components";
import {made_button} from "../../asset";
import {made_ex} from "../../asset";
export const St = {
    Container: styled.div`
    background-color: #212121;
    width: 80rem;
    margin: 5% auto 10% auto;
    background-color: white;
    align-items: center;
    display: column;
`,
Container2: styled.div`
width: 80rem;
margin: auto;
align-items: center;
display: flex;
`,
Container3: styled.div`
width: 32rem;
height:32rem;
margin: auto;
align-items: center;
display: flex;
background-color:#D9D9D9;
`,
    maintext: styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.3em;
`,
Inputbox:styled.input`
    width: 88%;
    border: 1px radius #7D7D7D;
    font-size: 1rem;
    height: 3rem;
    align-items: center;
    margin-bottom: 1.0rem;
    background-color: #FFFFFF;
    overflow: auto;
    border-radius: 0.5rem;
    margin-top:0.9rem;
    `,
    button_made:styled.button`
    background-image:url(${made_button});
    background-size:cover;
    background-repeat: no-repeat;
    width: 10.9em;
    height:4em;
    margin:auto;
    
        border:none;
     `,
     Ex: styled.div`
     width: 80rem;
    align-items: center;
    margin-top:10%;
    height: 30rem;
    padding-top:10px;
    background-image: url(${made_ex});
    background-size: cover;
    `,
};
