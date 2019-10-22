import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
`;

export const InfoMeetup = styled.div`
  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    input {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      margin-bottom: 10px;
      border: none;
      height: 44px;
      color: #fff;
      padding: 0 10px;

      ::placeholder {
        color: #999;
      }
    }

    textarea {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      border: none;
      margin-bottom: 10px;
      height: 150px;
      padding: 10px;
      color: #fff;
      resize: none;
      font-size: 14px;
      font-family: 'Roboto';

      ::placeholder {
        color: #999;
        font-size: 14px;
        font-family: 'Roboto';
      }
    }
    button {
      width: fit-content;
      background: #d44059;
      border: none;
      border-radius: 4px;
      align-self: flex-end;
      display: flex;
      align-items: center;
      padding: 5px 10px;
      span {
        font-size: 12px;
        color: #fff;
        font-weight: bold;
      }
      svg {
        margin-right: 5px;
      }
    }
  }
`;
