import { css } from 'styled-components';

const Color = {
  blue: {
    light: '#51ABF3',
    dark: '#0095F6',
  },
  gray: {
    light: '#E9E9E9',
    medium: '#9B9898',
    dark: '#343A40',
  },
};

const Flexcenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const theme = {
  Color,
  Flexcenter,
};
export default theme;
