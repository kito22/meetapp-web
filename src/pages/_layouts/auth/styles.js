import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #22202c, #402845);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  img {
    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  span {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  input {
    height: 44px;
    background: rgba(255, 255, 255, 0.1);
    padding: 0 10px;
    border-radius: 4px;
    margin-bottom: 10px;
    border: none;
    color: #fff;

    ::placeholder {
      font-size: 14px;
      color: #999;
    }
  }

  button {
    height: 44px;
    border-radius: 4px;
    background: #f94d6a;
    border: none;
    font-weight: normal;
    color: #fff;
    font-size: 16px;
    margin-top: 10px;
  }

  a {
    margin-top: 10px;
    color: #999;
    font-size: 14px;
  }
`;
