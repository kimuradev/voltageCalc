import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Image = styled('img')`
  ${props =>
    props.center &&
    css`
      display: block;
      margin: 0 auto;
    `};
`;

Image.defaultProps = {
  center: false
};

Image.propTypes = {
  center: PropTypes.bool
};

export default Image;
