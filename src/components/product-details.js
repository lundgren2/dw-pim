import React from 'react'
import styled, { Box } from '@xstyled/styled-components'
import DummyItem from './dummy-item'

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #f9f9f9;
`
const Title = styled('h2')`
  font-size: 3;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 3;
`
const ProductElement = () => {
  return <div>TYP: desc</div>
}
const ProductDetails = () => {
  return (
    <Wrapper p={4}>
      <Title>Details</Title>
      <ProductElement />
    </Wrapper>
  )
}

export default ProductDetails
