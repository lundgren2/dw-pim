export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

export const brand = {
  primary: 'rgba(0, 14, 34, 0.9)',
  secondary: '#B1D8C6',
}

export const colors = {
  ...brand,
  dark: '#444',
  text: 'rgb(0, 8, 28)',
  gray: '#6b6b6b',
  lightGray: 'rgb(151, 151, 151)',
  black: '#000',
  white: '#fff',
  bg: '#f9f9f9',
  borderColor: 'rgb(221, 221, 221)',
  link: brand.primary,
  linkHover: `rgba(${brand.primary}, 0.5)`,
}

export const fonts = {
  default: [
    'Nunito Sans',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ].join(', '),
  serif: ['Georgia', 'serif'].join(', '),
  mono: [
    'SFMono-Regular',
    'Consolas',
    'Liberation Mono',
    'Menlo',
    'Courier',
    'monospace',
  ].join(', '),
  sizeSm: '14px',
  sizeMd: '16px',
}

export const animation = {
  transitionTime: '300ms',
}

export default {
  colors,
  animation,
  breakpoints,
  fonts,
  space: [0, 4, 8, 16, 32, 64],
  fontSizes: [12, 14, 16, 20, 24, 32],
}
