import { AiTwotoneCloseCircle } from "react-icons/ai";
import styled from "styled-components";

import {
  flexMixin,
  primaryColor,
  primaryFont,
  secondaryColor,
} from "../../../assets/style/GlobalStyles";

type WrongInfoProps = {
  invalidCredentials: boolean;
};

export const SettingsContainer = styled.section`
  max-width: 70vw;
  margin: 0 auto 3rem;

  > div {
    ${flexMixin({ justify: "space-between", align: "flex-start" })};
  }

  h2 {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.5rem;
    font-weight: 100;

    margin: 1rem 0 2rem;
  }

  > p {
    color: rgba(255, 255, 255, 0.7);
    text-transform: uppercase;
  }
`;

export const ToggleMenu = styled.article`
  margin: 1rem 0 2rem;

  ul {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    list-style-type: none;

    li {
      color: ${secondaryColor};
      text-transform: uppercase;

      margin-right: 2rem;

      cursor: pointer;
    }
  }
`;

export const ProfileForm = styled.article`
  width: 40%;

  label {
    ${flexMixin({ justify: "flex-start", align: "flex-start" })};
    flex-direction: column;

    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;

    margin: 0 0 1rem;
  }

  input,
  textarea,
  button {
    background-color: ${primaryColor};

    color: ${secondaryColor};
    font-family: ${primaryFont};
    font-weight: 100;
    letter-spacing: 1px;

    max-height: 180px;
    width: 100%;

    margin-top: 0.2rem;
    padding: 9px 9px 8px;
    border: none;
    border-radius: 3px;
    outline: none;

    box-shadow: inset 0 -1px 0 #456;
    resize: vertical;
  }

  button {
    background-color: ${primaryColor};

    color: #f4fcf0;
    text-transform: uppercase;
    letter-spacing: 2px;

    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
    cursor: pointer;

    &:hover {
      color: ${secondaryColor};
    }
  }
`;

export const ProfileName = styled.div`
  ${flexMixin({ justify: "space-between", align: "center" })};

  label {
    width: 48%;
  }
`;

export const FavoriteFilms = styled.article`
  margin-top: -0.5rem;

  ul {
    ${flexMixin({ justify: "space-between", align: "center" })};
    list-style-type: none;

    li {
      ${flexMixin({ justify: "center", align: "center" })};

      background-color: #2c3641;
      position: relative;

      height: 165px;
      width: 110px;

      margin-right: 1rem;
      border-radius: 4px;

      box-shadow:
        inset 0 1px 0 hsla(0, 0%, 100%, 0.35),
        0 0 10px #000;
      cursor: pointer;

      svg {
        color: #5c5b5b;
        font-size: 2rem;
        text-align: center;

        border-radius: 50%;

        transition: all 200ms ease;
      }

      &:hover svg:not(:first-of-type) {
        color: #fff;
        box-shadow:
          inset 0 1px 0 hsla(0, 0%, 100%, 0.35),
          0 0 10px #000;
      }
    }
  }

  h3 {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.1rem;
    font-weight: 100;

    margin-bottom: 0.3rem;
  }
`;

export const RemoveMovie = styled(AiTwotoneCloseCircle)`
  font-size: 1.5rem !important;

  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
`;

export const WrongInfo = styled.p<WrongInfoProps>`
  color: #ff0000;
  opacity: ${({ invalidCredentials }) => (invalidCredentials ? 1 : 0)};

  margin-top: 1rem;

  transition: opacity 0.3s ease-in-out;
`;
