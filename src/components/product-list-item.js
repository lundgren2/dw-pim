import React, { useState } from 'react'
import styled from '@xstyled/styled-components'
import DummyItem from './dummy-item'
// import { css } from 'styled-components/macro'

const Tr = styled('tr')`
  transition: max-height 1.3s ease-out;
  height: auto;
  max-height: 0;
  ${({ isExpanded }) => isExpanded && `max-height: 600px;`};
`

const Td = styled('td')`
  border-bottom: 1;
  border-color: lightgray;
  text-align: left;
  padding: 2;

  &:last-of-type  {
    width: 50px;
  }
`
const TitleTd = styled(Td)`
  color: primary;
  font-style: italic;
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
  const [isExpanded, setExpanded] = useState(false)
  const { id, key, published, elements } = product
  const { value: price, unitAbbreviation: currency } = elements[3].value

  console.log(isExpanded)

  return (
    <Tr onClick={() => setExpanded(!isExpanded)} isExpanded={isExpanded}>
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

//   <Code>DEBUG: {JSON.stringify(product, 0, 2)}</Code>
// <Wrapper p={4}>
//   <span>{id}</span>
//   <br />
// </Wrapper>
