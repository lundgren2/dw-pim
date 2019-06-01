import React, { useContext } from 'react'
import ProductImage from './product-image'
import ProductDetails from './product-details'
import styled, { Box, css } from '@xstyled/styled-components'
import { breakpoints } from '@xstyled/system'
import CloseButton from './close-button'
import { ProductContext } from '../context'

const Wrapper = styled(Box)(
  breakpoints({
    xs: css`
      display: flex;
      flex-direction: column-reverse;
    `,
    md: css`
      flex-direction: row;
    `,
  }),
)

const ProductData = () => {
  const [{ data }, dispatch] = useContext(ProductContext)
  const { selectedProduct } = data

  if (Object.entries(selectedProduct).length === 0) return null

  const imageObj = selectedProduct.elements.find(
    element => element.name === 'main_image' && element.type === 'href',
  )

  return (
    <>
      <CloseButton onClick={() => dispatch({ type: 'RESET_PRODUCT' })} mt={2} />
      <Wrapper p={2}>
        <ProductImage id={imageObj.value.id} />
        <ProductDetails product={selectedProduct} />
      </Wrapper>
    </>
  )
}

export default ProductData
