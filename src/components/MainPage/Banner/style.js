import styled from "styled-components";
import { mainBannerImage } from "../../../asset";

export const St = {
  Banner: styled.section`
    width: 100%;
    height: 50rem;

    margin-top: -13rem;

    background-position: 50%;
    background-image: url(${mainBannerImage});
    object-fit: cover;
  `,

  GenerateBtn: styled.button`
    border: 0;
    background-color: transparent;

    margin: 40rem 0 0 20rem;
  `,

  BannerContents: styled.div`
    position: absolute;
    margin: 20rem 0 0 20rem;
  `,
};
