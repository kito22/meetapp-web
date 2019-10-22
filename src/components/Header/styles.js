import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 0 30px;
`;

export const Content = styled.div`
  max-width: 900px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  nav {
    height: 66px;
    display: flex;
    align-items: center;

    img {
      height: 32px;
      width: 32px;
      border: none;
    }

    a {
      color: #d44059;
      font-weight: bold;
      font-size: 18px;
      margin-left: 20px;
    }
  }
`;

export const HeaderContainer = styled.div`
  display: flex;

  div {
    margin-right: 20px;

    strong {
      display: block;
      color: #fff;
      font-size: 14px;
    }
    a {
      display: block;
      color: #999;
      margin-top: 5px;
      font-size: 12px;
      text-align: right;
    }
  }
  button {
    width: fit-content;
    padding: 5px 15px;
    border-radius: 4px;
    border: none;
    background: #d44059;
    color: #fff;
    font-weight: bold;
    font: 12px;
  }
`;
