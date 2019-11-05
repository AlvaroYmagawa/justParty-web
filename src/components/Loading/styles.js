import styled, { keyframes } from 'styled-components';

const animation1 = keyframes`
  from{
    bottom: 5%;
  }

  to{
    bottom: 0%;
  }
`;

const animation2 = keyframes`
  from{
    bottom: 7.5%;
  }

  to{
    bottom: 0%;
  }
`;

const animation3 = keyframes`
  from{
    bottom: 10%;
  }

  to{
    bottom: 0%;
  }
`;

export const Container = styled.div`
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    position: relative;
    color: #fff;

    font-size: 128px;
  }

  .first {
    animation: ${animation1} infinite 1.6s;
  }

  .second {
    animation: ${animation2} infinite 1.6s;
  }

  .third {
    animation: ${animation3} infinite 1.6s;
  }
`;
