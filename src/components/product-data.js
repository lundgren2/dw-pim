import React, { useContext } from 'react'
import ProductImage from './product-image'
import ProductDetails from './product-details'
import styled, { Box } from '@xstyled/styled-components'
import { ProductContext } from '../context'

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column-reverse;
`

const ProductData = () => {
  const [{ data }, dispatch] = useContext(ProductContext)
  const { selectedProduct } = data

  if (Object.entries(selectedProduct).length === 0) return null

  const imageObj = selectedProduct.elements.find(
    element => element.name === 'main_image' && element.type === 'href',
  )

  return (
    <Wrapper p={2}>
      <button onClick={() => dispatch({ type: 'RESET_PRODUCT' })}>CLOSE</button>
      <ProductImage id={imageObj.value.id} />
      <ProductDetails product={selectedProduct} />
    </Wrapper>
  )
}

export default ProductData
