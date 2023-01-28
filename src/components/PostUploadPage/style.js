import styled from "styled-components";
import {UploadImage} from "../../asset";
import {Bar} from "../../asset";
import {upload_button} from "../../asset";

export const St = {
    UploadContainer: styled.form`
        background-color: #212121;
        width: 65rem;
        margin: 5% auto 10% auto;
        background-color: white;
        align-items: center;
        display: row;
    `,
    Bar: styled.div`
    width: 100%;
    align-items: center;
    height: 10rem;
    padding-top:10px;
    background-image: url(${Bar});
    background-size: cover;
`  ,
  barbox: styled.div`
  width: 65rem;
  margin:  auto;
  margin-top:  3.5rem;
  align-items: center;
  display:flex;
  flex-direction: row;
`
,
bartext1: styled.div`
width: 13em;
    font-size: 2rem;
    font-weight: bold;
    color:#ffffff;
    margin-left:8rem;
`,
bartext2: styled.div`
width: 13em;
font-size: 2rem;
    font-weight: bold;

`,
bartext3: styled.div`
width: 13em;
font-size: 2rem;
    font-weight: bold;

`,
FileUpload :styled.div `
        background-color: #212121;
        width: 65rem;
        height: 15rem;
        margin: auto auto 10% auto;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
    `,

    Img:styled.div `
    align-items: center;
        display: flex;
        justify-content: center;
        align-items: center;        
    `,
    InputContainer:styled.div `
    margin-left: 20%;
    margin-right: 20%;
    align-items: center;
    `,
    InputTitle:styled.div `
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.3em;
    `,
    Inputbox:styled.input`
    width: 98%;
    border:none;
    font-size: 1rem;
    height: 3rem;
    align-items: center;
    margin-bottom: 1.0rem;
    background-color: #d9d9d9;
    overflow: auto;
    border-radius: 0.5rem;
    `,
    selectbox:styled.select`
    width: 98%;
    border:none;
    font-size: 1rem;
    height: 3rem;
    align-items: center;
    margin-bottom: 1.0rem;
    background-color: #d9d9d9;
    overflow: auto;
    border-radius: 0.5rem;
    `,
    button_input:styled.button`
    background-image:url(${upload_button});
    background-size:cover;
    background-repeat: no-repeat;
    width: 11em;
    height: 3rem;
    margin:auto;
    margin-top:5%;
    display: flex;
        justify-content: center;
        align-items: center;
        border:none;
     `,
    
}