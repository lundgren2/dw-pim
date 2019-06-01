import React from 'react'
import styled, { Box } from '@xstyled/styled-components'

const transition = 'all 0.3s ease-in'
const color = 'lightGray'
const size = '40px'

const CloseButton = styled(Box)`
  position: relative;
  margin-left: auto;
  width: ${size};
  height: ${size};
  cursor: pointer;

  span:first-of-type {
    height: 2px;
    width: ${size};
    position: absolute;
    margin-top: 24px;
    background-color: ${color};
    transform: rotate(45deg);
    transition: ${transition};
  }
  span:nth-of-type(2) {
    height: 2px;
    width: ${size};
    position: absolute;
    margin-top: 24px;
    background-color: ${color};
    transform: rotate(-45deg);
    transition: ${transition};
  }
  label {
    color: text;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: ${transition};
    opacity: 0;
    margin: 45px 0 0 2px;
    position: absolute;
  }

  &:hover {
    span:first-of-type {
      transform: rotate(-45deg);
      background-color: dark;
    }
    span:nth-of-type(2) {
      transform: rotate(45deg);
      background-color: dark;
    }
    label {
      opacity: 1;
    }
  }
`

export default props => (
  <CloseButton {...props}>
    <span />
    <span />
    <label>close</label>
  </CloseButton>
)
