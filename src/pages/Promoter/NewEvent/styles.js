import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 30px 7%;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    > button {
      margin: 16px 0 16px auto;
      text-transform: uppercase;
      width: 100%;
      max-width: 300px;
    }
  }
`;

export const InputArea = styled.div`
  margin-top: 24px;
  background: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.border};
  border-radius: 4px;

  span {
    margin-top: 8px;
    font-size: 14px;
    color: ${colors.span};
  }

  .categoriesHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      display: flex;
      background: none;
      align-items: center;
      font-weight: bold;
      text-transform: none;
      border: none;
      color: ${colors.accent};

      svg {
        margin-left: 4px;
        fill: ${colors.accent};
        height: 20px;
        width: 20px;
      }
    }
  }

  .banner {
    margin-top: 64px;

    p {
      span {
        color: ${colors.accent};
      }
    }

    .bannerInfo {
      margin: 8px 0 40px;
      color: ${colors.span};

      span {
        font-weight: bold;
        margin-left: 4px;
      }
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      color: ${colors.span};

      span {
        color: ${colors.accent};
        margin: 0 4px;
      }
    }
  }

  .content {
    margin-top: 64px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    .dateArea {
      display: flex;
      width: 50%;
      align-items: center;
      justify-content: space-between;

      & + div {
        margin-left: 24px;
      }

      input {
        max-width: 300px;
        background: none;
        width: 80%;
        border: none;
        border-bottom: 1px solid ${colors.span};

        &:focus {
          border-bottom: 2px solid ${colors.accent};
        }
      }
    }

    p {
      span {
        color: ${colors.accent};
      }
    }

    > input,
    textarea {
      background: none;
      width: 80%;
      border: none;
      border-bottom: 1px solid ${colors.span};

      &:focus {
        border-bottom: 2px solid ${colors.accent};
      }
    }

    textarea {
      resize: none;
    }
  }
`;
