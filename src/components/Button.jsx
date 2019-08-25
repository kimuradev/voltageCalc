import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Circle from './animations/Circle';

const Btn = styled('button')`
  background-color: #3366ff;
  height: 80px;
  width: 100%;

  color: #fff;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  padding: 24px;
  border-radius: 4px;

  outline: 0;
  border: 0;
  user-select: none;
  white-space: nowrap;
  text-align: left;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &:disabled {
    transition: #ccc 1s linear;
    background-color: #cccccc;

    &:hover {
      background-color: #cccccc;
    }
  }

  ${props =>
    props.fixed &&
    css`
      align-self: stretch;
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      border-radius: 0;
    `};

  > :only-child {
    margin: 0 auto;
  }
`;

const Button = ({ arrow, children, isLoading, ...props }) => (
  <Btn {...props} isLoading>
    {isLoading ? (
      <Circle />
    ) : (
      <React.Fragment>
        <span>{children}</span>
        {arrow && (
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Symbols"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="mob/ico/7º/next">
                <g>
                  <rect id="bounding-box" x="0" y="0" width="24" height="24" />
                  <path
                    d="M20.5857864,13 L1.09090909,13 C0.488416637,13 0,12.5522847 0,12 C0,11.4477153 0.488416637,11 1.09090909,11 L20.5857864,11 L16.2928932,6.70710678 C15.9023689,6.31658249 15.9023689,5.68341751 16.2928932,5.29289322 C16.6834175,4.90236893 17.3165825,4.90236893 17.7071068,5.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L17.7071068,18.7071068 C17.3165825,19.0976311 16.6834175,19.0976311 16.2928932,18.7071068 C15.9023689,18.3165825 15.9023689,17.6834175 16.2928932,17.2928932 L20.5857864,13 Z"
                    id="shape-icon"
                    fill="#FFFFFF"
                    fillRule="nonzero"
                  />
                </g>
              </g>
            </g>
          </svg>
        )}
      </React.Fragment>
    )}
  </Btn>
);

Button.defaultProps = {
  arrow: false
};

Button.propTypes = {
  arrow: PropTypes.bool
};

export default Button;
