import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    > span {
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      padding: 5px 10px;
      margin-bottom: 10px;
      border: none;
      height: 44px;
      color: #fff;

      ::placeholder {
        color: #999;
      }
    }

    button {
      display: flex;
      width: fit-content;
      align-items: center;
      padding: 5px 10px;
      border-radius: 4px;
      border: none;
      background: #d44059;
      margin-top: 5px;
      align-self: flex-end;

      svg {
        margin-right: 5px;
      }

      span {
        font-size: 12px;
        font-weight: bold;
        color: #fff;
      }
    }
  }
`;
