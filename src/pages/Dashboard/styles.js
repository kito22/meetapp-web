import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
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

  a {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 4px;
    border: none;
    background: #d44059;
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

export const MeetupContainer = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
  min-height: 400px;
  justify-content: center;

  span {
    font-size: 18px;
    font-weight: bold;
    color: #999;
    align-self: center;
  }
`;

export const MeetupList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  li {
    display: flex;
    align-items: center;
    height: 44px;
    justify-content: space-between;
    padding: 5px 20px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }
    strong {
      color: #fff;
    }

    div {
      display: flex;
      align-items: center;

      button {
        background: none;
        border: none;
      }

      span {
        margin-right: 20px;
        color: #888;
        font-size: 12px;
      }
    }
  }
`;
