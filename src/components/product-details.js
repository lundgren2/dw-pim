import React from 'react'
import styled, { Box } from '@xstyled/styled-components'
// import DummyItem from './dummy-item'

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: grey;
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
const ProductDetails = ({ product }) => {
  const { key } = product
  return (
    <Wrapper p={4}>
      <Title>{key}</Title>
      <ProductElement />
    </Wrapper>
  )
}

export default ProductDetails
