import React from 'react'
import styled, { css } from '@xstyled/styled-components'
import { breakpoints } from '@xstyled/system'
import { Watch } from 'react-feather'
import NavItem from './nav-item'

const Wrapper = styled('div')(
  breakpoints({
    xs: css`
      display: flex;
      background-color: primary;
      padding: 2 4;
      justify-content: space-between;
    `,
    lg: css`
      justify-content: flex-start;
      flex-direction: column;
      padding-top: 4;
      padding: 4 0;
    `,
  }),
)

const Logo = styled('div')`
  font-family: sans-serif;
  text-transform: uppercase;
  text-align: center;
  color: white;
  user-select: none;
  span {
    font-size: 2rem;
    line-height: 2rem;
    display: block;
  }
`

const Nav = () => {
  return (
    <Wrapper>
      <Logo>
        <span>DW</span>
        PIM
      </Logo>
      <NavItem className="selected">
        <Watch />
        Products
      </NavItem>
    </Wrapper>
  )
}

export default Nav
