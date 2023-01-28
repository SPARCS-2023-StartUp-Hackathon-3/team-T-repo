import styled from "styled-components";
import { Link } from "react-router-dom";

export const St = {
  Header: styled.header`
    position: relative;
    display: flex;

    margin: 3.3rem 4rem;
  `,

  Menubar: styled.div``,

  Link: styled(Link)`
    margin-left: 13rem;
  `,

  FeatureContainer: styled.ul`
    list-style: none;

    display: flex;
    margin: auto 4rem auto auto;

    gap: 2.7rem;
    align-items: center;
  `,

  Featureitem: styled.li``,
};
