import React from 'react'
import styled from '@xstyled/styled-components'

const Logo = styled('div')`
  font-family: sans-serif;
  text-transform: uppercase;
  text-align: center;
  color: white;
  user-select: none;
  letter-spacing: 2;
  span {
    font-size: 2rem;
    line-height: 2rem;
    display: block;
  }
`

export default () => (
  <Logo>
    <span>DW</span>
    PIM
  </Logo>
)
