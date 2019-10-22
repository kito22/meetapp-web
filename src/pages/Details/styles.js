import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  max-width: 900px;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 50px;

  h1 {
    color: #fff;
  }
`;

export const ContainerActions = styled.div`
  display: flex;

  a {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 4px;
    border: none;
    background: #4dbaf9;

    ${props =>
      props.past &&
      css`
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
      `}
  }
  button {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 4px;
    border: none;
    background: #d44059;
    margin-left: 10px;
    ${props =>
      props.past &&
      css`
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
      `}
  }

  svg {
    margin-right: 5px;
  }

  span {
    font-size: 12px;
    font-weight: bold;
    color: #fff;
  }
`;

export const MeetupBanner = styled.div`
  margin-top: 30px;
  width: 900px;

  div {
    background: rgba(0, 0, 0, 0.4);
    border: 4px;
    img {
      display: block;
      margin: 0 auto;
      max-height: 400px;
      max-width: 900px;
    }
  }

  p {
    margin-top: 10px;
    color: #fff;
    font-size: 12px;
    line-height: 2;
    text-align: justify;
  }
`;

export const MeetupDetails = styled.div`
  display: flex;
  align-self: flex-start;
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
  }
  span {
    color: #999;
    font-size: 10px;
    margin-right: 20px;
  }
  svg {
    margin-right: 5px;
  }
`;
