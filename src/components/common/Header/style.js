import styled from "styled-components";
import { Link } from "react-router-dom";

export const St = {
  Header: styled.header`
    position: relative;
    display: flex;

    margin: 3.3rem 4rem;
  `,

  Menubar: styled.div`
    margin-right: 28rem;
  `,

  Link: styled(Link)`
    margin-right: 71.7rem;
  `,

  FeatureContainer: styled.ul`
    list-style: none;

    display: flex;
    margin: 0;

    position: fixed;
    right: 4rem;

    gap: 2.7rem;
    align-items: center;
  `,

  Featureitem: styled.li``,
};
