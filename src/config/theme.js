export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

export const mediaQueries = {
  small: `@media screen and (min-width: ${breakpoints[0]})`,
  medium: `@media screen and (min-width: ${breakpoints[1]})`,
  large: `@media screen and (min-width: ${breakpoints[2]})`
}

export const brand = {
  primary: 'rgb(215, 70, 75)',
  secondary: '#B1D8C6'
}

export const colors = {
  ...brand,
  dark: '#444',
  text: '#555',
  grey: '#6b6b6b',
  black: '#000',
  white: '#fff',
  bg: '#f9f9f9',
  link: brand.primary,
  linkHover: `rgba(${brand.primary}, 0.5)`
}

export const fonts = {
  default: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol'
  ].join(', '),
  serif: ['Georgia', 'serif'].join(', '),
  mono: [
    'SFMono-Regular',
    'Consolas',
    'Liberation Mono',
    'Menlo',
    'Courier',
    'monospace'
  ].join(', '),
  sizeSm: '16px',
  sizeMd: '18px'
}

export const animation = {
  transitionTime: '300ms'
}

export const space = [0, 4, 8, 16, 32, 64]

export default {
  colors,
  animation,
  breakpoints,
  fonts,
  space,
  fontSizes: [12, 14, 16, 20, 24, 32],
  container: {
    base: '100rem',
    text: '55rem'
  },
  spacer: {
    horizontal: '2rem',
    vertical: '3rem'
  },
  gradient: `linear-gradient(
    to right,
    rgba(208, 255, 227, 1) 0%,
    rgba(177, 216, 198, 1) 100%
  )`
}
