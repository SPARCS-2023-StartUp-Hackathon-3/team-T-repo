import styled from "styled-components";
import { category_button, category_button1, category_button2, category_button3, category_button4, category_button5, category_button6, category_button7 } from "../../asset";

export const St = {
    TopicContainer: styled.div`
    width: 80rem;
    height: 3rem;
    margin: 1% auto 1% auto;
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
    height: 80rem;
    margin: 1% auto 3% auto;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    `
    ,
    button_input: styled.button`
    background-image:url(${category_button});
    background-size:cover;
    background-repeat: no-repeat;
    width: 22.5rem;
    height: 22.5rem;
    margin-left: 3rem;
    margin-right: 1.5rem;
    `,
    button_input1: styled.button`
    background-image:url(${category_button1});
    background-size:cover;
    background-repeat: no-repeat;
    width: 22.5rem;
    height: 22.5rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    `,
    button_input2: styled.button`
    background-image:url(${category_button2});
    background-size:cover;
    background-repeat: no-repeat;
    width: 22.5rem;
    height: 22.5rem;
    margin-left: 1.5rem;
    margin-right: 3rem;
    `,
    button_input3: styled.button`
    background-image:url(${category_button3});
    background-size:cover;
    background-repeat: no-repeat;
    width: 22.5rem;
    height: 22.5rem;
    margin-left: 3rem;
    margin-right: 1.5rem;
    `,
    button_input4: styled.button`
    background-image:url(${category_button4});
    background-size:cover;
    background-repeat: no-repeat;
    width: 22.5rem;
    height: 22.5rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    `,
    button_input5: styled.button`
    background-image:url(${category_button5});
    background-size:cover;
    background-repeat: no-repeat;
    width: 22.5rem;
    height: 22.5rem;
    margin-left: 1.5rem;
    margin-right: 3rem;
    `,
    button_input6: styled.button`
    background-image:url(${category_button6});
    background-size:cover;
    background-repeat: no-repeat;
    width: 22.5rem;
    height: 22.5rem;
    margin-left: 3rem;
    margin-right: 1.5rem;
    `,
    button_input7: styled.button`
    background-image:url(${category_button7});
    background-size:cover;
    background-repeat: no-repeat;
    width: 22.5rem;
    height: 22.5rem;
    margin-left: 1.5rem;
    margin-right: 3rem;
    `,

}