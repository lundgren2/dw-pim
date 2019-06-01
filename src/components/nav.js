import React from 'react'
import styled, { css } from '@xstyled/styled-components'
import { breakpoints } from '@xstyled/system'
import { Watch } from 'react-feather'
import NavItem from './nav-item'
import Logo from './logo'

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

const Nav = () => {
  return (
    <Wrapper>
      <Logo />
      <NavItem isCurrentItem={true}>
        <Watch />
        Products
      </NavItem>
    </Wrapper>
  )
}

export default Nav
