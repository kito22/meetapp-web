import styled from 'styled-components';

export const BannerContainer = styled.div`
  background: rgba(0, 0, 0, 0.3);
  height: 400px;
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #999;
    font-weight: bold;
    min-height: 100%;
    min-width: 100%;

    img {
      max-width: 900px;
      max-height: 400px;
    }

    svg {
      margin-bottom: 5px;
    }

    input {
      display: none;
    }
  }
`;
