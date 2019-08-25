import styled from 'styled-components';

const FadeInOut = styled.div`
  &.fadeOut {
    opacity: 0;
    position: absolute;
  }
  &.fadeIn {
    opacity: 1;
    position: static;
    transition: opacity 1s linear;
  }
`;

export default FadeInOut;
