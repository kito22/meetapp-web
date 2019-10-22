import styled from 'styled-components';

export const Container = styled.div`
  .react-datepicker-wrapper {
    display: inline-block;
    padding: 0;
    border: 0;
    width: 100%;
  }

  .react-datepicker {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 0.8rem;
    background-color: #7159c1;
    color: #000;
    border: 1px solid #aeaeae;
    border-radius: 0.3rem;
    display: inline-block;
    position: relative;
  }
  .react-datepicker--time-only {
    .react-datepicker__triangle {
      left: 35px;
    }

    .react-datepicker__time-container {
      border-left: 0;
    }

    .react-datepicker__time {
      border-radius: 0.3rem;
    }

    .react-datepicker__time-box {
      border-radius: 0.3rem;
    }
  }

  .react-datepicker__input-container {
    position: relative;
    display: inline-block;
    width: 100%;

    input {
      width: 50%;
    }
  }
  .react-datepicker__navigation {
    background: none;
    line-height: 1.7rem;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 10px;
    width: 0;
    padding: 0;
    border: 0.45rem solid transparent;
    z-index: 1;
    height: 10px;
    width: 10px;
    text-indent: -999em;
    overflow: hidden;

    &--previous {
      left: 10px;
      margin-left: 30px;
      border-right-color: #999;

      &:hover {
        border-right-color: darken(#999, 10%);
      }
    }

    &--next {
      right: 50px;
      margin-right: 40px;
      border-left-color: #999;
      &--with-time:not(&--with-today-button) {
        right: 80px;
      }

      &:hover {
        border-left-color: darken(#999, 10%);
      }
    }

    &--years {
      position: relative;
      top: 0;
      display: block;
      margin-left: auto;
      margin-right: auto;

      &-previous {
        top: 4px;
        border-top-color: #999;

        &:hover {
          border-top-color: darken(#999, 10%);
        }
      }

      &-upcoming {
        top: -4px;
        border-bottom-color: #999;

        &:hover {
          border-bottom-color: darken(#999, 10%);
        }
      }
    }
  }
`;
