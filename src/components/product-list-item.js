import React, { useContext } from 'react'
import styled from '@xstyled/styled-components'
import DummyItem from './dummy-item'
import { ProductContext } from '../context'

const Tr = styled('tr')`
  transition: background-color 0.4s ease-out;
  ${({ isSelected }) => isSelected && `background-color: #eee;`};
`

const Td = styled('td')`
  border-bottom: 1;
  border-color: lightGray;
  text-align: left;
  padding: 2;

  &:last-of-type  {
    width: 50px;
  }
`
const TitleTd = styled(Td)`
  color: primary;
  font-style: italic;
  cursor: pointer;
`

export const ProductListItemLoading = () => {
  return (
    <Tr>
      <Td>
        <DummyItem />
      </Td>
      <TitleTd>
        <DummyItem width={180} />
      </TitleTd>
      <Td>
        <DummyItem />
      </Td>
      <Td>
        <DummyItem />
      </Td>
    </Tr>
  )
}
const ProductListItem = ({ product }) => {
  const [{ data }, dispatch] = useContext(ProductContext)
  const { id, key, published, elements } = product
  const { value: price, unitAbbreviation: currency } = elements[3].value
  const isSelected = id === data.selectedProduct.id

  return (
    <Tr
      onClick={() => dispatch({ type: 'SELECT_PRODUCT', payload: product })}
      isSelected={isSelected}
    >
      <Td>{id}</Td>
      <TitleTd>{key}</TitleTd>
      <Td>
        ${price} {currency}
      </Td>
      <Td>{published ? 'Yes' : 'No'}</Td>
    </Tr>
  )
}

export default ProductListItem
