import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 160px;
  margin-bottom: 8px;
`;

const Label = styled.label`
  font-size: 24px;
  color: #33f;
  font-weight: 700;
`;

const Result = props => {
  return (
    <Wrapper>
      <Label>
        Result: {props.result}
        {props.unit}
      </Label>
    </Wrapper>
  );
};

export default Result;
