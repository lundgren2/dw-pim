import React from 'react'
import styled, { Box } from '@xstyled/styled-components'
import ProductElement from './product-element'

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: gray;
`
const Title = styled('h2')`
  font-size: 3;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 3;
`

const ProductDetails = ({ product }) => {
  const { key, elements } = product

  return (
    <Wrapper>
      <Title>{key}</Title>
      {elements.map(element => (
        <ProductElement key={element.name} element={element} />
      ))}
    </Wrapper>
  )
}

export default ProductDetails
