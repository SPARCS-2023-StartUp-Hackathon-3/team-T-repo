import styled from "styled-components";
import { Link } from "react-router-dom";

export const St = {
  LandingBtn: styled.section`
    display: flex;
    margin: 10rem 0 12.5rem 0;
  `,

  ArtWrapper: styled(Link)`
    margin-right: 3rem;

    width: 58.2rem;
  `,

  ComicWrapper: styled(Link)`
    display: block;

    width: 58.2rem;
    margin-bottom: 1.5rem;
  `,

  NovelWrapper: styled(Link)`
    width: 58.2rem;
    height: 31.2rem;
  `,

  LaterLandingBtn: styled.div`
    flex-direction: column;
  `,
};
