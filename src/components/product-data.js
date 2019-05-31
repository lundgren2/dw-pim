import React from 'react'
import ProductImage from './product-image'
import ProductDetails from './product-details'
import styled, { Box } from '@xstyled/styled-components'

const Wrapper = styled(Box)`
  display: flex;
  /* flex-direction: column; */
`

const ProductData = () => {
  return (
    <Wrapper p={2}>
      <ProductImage />
      <ProductDetails />
    </Wrapper>
  )
}

export default ProductData
