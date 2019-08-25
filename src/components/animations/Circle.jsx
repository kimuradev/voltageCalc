import styled, { keyframes, css } from 'styled-components';
import PropTypes from 'prop-types';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Circle = styled.span`
  display: inline-block;
  position: relative;
  font-size: 0;
  border-top: 4px solid rgba(255, 255, 255, 0.2);
  border-right: 4px solid ${props => props.circleColor || '#FFF'};
  border-bottom: 4px solid ${props => props.circleColor || '#FFF'};
  border-left: 4px solid ${props => props.circleColor || '#FFF'};
  transform: translateZ(0);
  animation: ${spin} 1.1s infinite linear;

  &,
  &:after {
    -webkit-appearance: none;
    border-radius: 100%;
    width: 24px;
    height: 24px;
  }

  ${({ tertiary }) =>
    tertiary &&
    css`
      border-right: 4px solid #3366ff;
      border-bottom: 4px solid #3366ff;
      border-left: 4px solid #3366ff;
    `};
`;

Circle.propTypes = {
  circleColor: PropTypes.string,
  tertiary: PropTypes.bool
};

export default Circle;
