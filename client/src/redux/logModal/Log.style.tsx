import styled, { css, keyframes } from "styled-components";

import {
  flexMixin,
  primaryFont,
  secondaryColor,
  tertiaryColor
} from "../../assets/style/GlobalStyles";

type LogModalProps = {
  isClosing?: boolean;
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const sharedModalStyle = css<LogModalProps>`
  ${flexMixin({ justify: "flex-start", align: "flex-start" })};
  flex-direction: column;
  position: relative;
  top: -4rem;
  background-color: #292929;
  color: #fff;
  width: 668px;
  font-family: ${primaryFont};
  padding: 20px;
  border-radius: 3px;
  animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 0.3s;
`;

const sharedButtonStyle = css`
  background-color: ${tertiaryColor};
  color: #fff;
  font-family: ${primaryFont};
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${secondaryColor};
  }
`;

export const FixedContainer = styled.div`
  ${flexMixin({ justify: "center", align: "center" })};
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 5;
`;

export const LogModal = styled.section<LogModalProps>`
  ${sharedModalStyle};

  h3 {
    text-transform: uppercase;
    font-weight: 200;
    letter-spacing: 1px;
  }

  form {
    ${flexMixin({ justify: "center", align: "flex-start" })};
    flex-direction: column;

    label {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }

    input {
      font-family: ${primaryFont};
      color: ${tertiaryColor};
      width: 588px;
      font-size: 1.1rem;
      padding: 10px;
      border: none;
      border-radius: 3px;
      outline: none;
      box-shadow:
        inset 0 1px 0 hsla(0, 0%, 100%, 0.35),
        0 0 10px #000;

      &:focus {
        background-color: #ccddee;
      }
    }
  }

  svg {
    font-size: 2rem;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;

    &:hover {
      color: ${secondaryColor};
    }
  }
`;

export const MovieModal = styled.section<LogModalProps>`
  ${sharedModalStyle};
  /* height: 383px; */
  width: 800px;
  padding-right: 70px;

  section {
    ${flexMixin({ justify: "flex-start", align: "flex-start" })};
    width: 100%;
  }

  img {
    height: 225px;
    width: 150px;
    box-shadow:
      inset 0 1px 0 hsla(0, 0%, 100%, 0.35),
      0 0 10px #000;
    border-radius: 5px;
    margin-right: 2rem;
  }
`;

export const BackButton = styled.button`
  ${sharedButtonStyle};
  margin-bottom: 1rem;
  box-shadow:
    inset 0 1px 0 hsla(0, 0%, 100%, 0.35),
    0 0 10px #000;
`;

export const LogHeader = styled.header`
  margin-top: -3rem;

  h2,
  h3,
  h4 {
    font-weight: 200;
  }

  div {
    ${flexMixin({ justify: "flex-start", align: "flex-end" })};
  }

  h2 {
    font-size: 1.5rem;
    line-height: 35px;
    margin-right: 1rem;
  }

  h3 {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }

  h4 {
    color: ${secondaryColor};
    font-size: 1.5rem;
  }
`;

export const Review = styled.div`
  ${flexMixin({ justify: "center", align: "flex-start" })};
  flex-direction: column;
  margin-top: 0.5rem;

  div {
    ${flexMixin({ justify: "space-between", align: "center" })};
    width: 100%;

    label {
      ${flexMixin({ justify: "center", align: "center" })};

      input {
        background-color: ${secondaryColor};
        height: 20px;
        width: 20px;
        font-size: 1rem;
        margin-right: 0.5rem;
        cursor: pointer;
      }

      span {
        font-size: 1.1rem;
        user-select: none;
      }
    }
  }

  textarea {
    height: 100px;
    width: 100%;
    color: ${tertiaryColor};
    font-size: 1.1rem;
    font-family: ${primaryFont};
    margin: 1rem 0;
    padding: 5px 10px;
    border: none;
    outline: none;
    border-radius: 3px;
    resize: none;

    &:focus {
      background-color: #ccddee;
      box-shadow:
        inset 0 1px 0 hsla(0, 0%, 100%, 0.35),
        0 0 10px #000;
    }
  }
`;

export const Rating = styled.div`
  ${flexMixin({ justify: "space-between", align: "center" })};

  p {
    margin-bottom: 0.3rem;
    letter-spacing: 1px;
  }

  div {
    svg {
      font-size: 2.5rem;
      cursor: pointer;
    }

    input {
      color: ${tertiaryColor};
      font-size: 1.1rem;
      font-family: ${primaryFont};
      padding: 5px 10px;
      border: none;
      outline: none;
      border-radius: 3px;
      resize: none;

      &:focus {
        background-color: #ccddee;
        box-shadow:
          inset 0 1px 0 hsla(0, 0%, 100%, 0.35),
          0 0 10px #000;
      }
    }
  }
`;

export const Submit = styled.div`
  ${flexMixin({ justify: "space-between", align: "center" })};
  margin-top: 1rem;

  label {
    ${flexMixin({ justify: "flex-start", align: "center" })};

    input {
      background-color: ${secondaryColor};
      height: 20px;
      width: 20px;
      font-size: 1rem;
      margin-right: 0.5rem;
      cursor: pointer;
    }

    span {
      font-size: 1.1rem;
      user-select: none;
    }
  }

  button {
    ${sharedButtonStyle};
  }
`;
