import { useContext } from 'react'
import { ProductContext } from '../context'

const useSelectedProduct = id => {
  const [state, dispatch] = useContext(ProductContext)
  dispatch({ type: 'SELECT_PRODUCT', payload: id })
  return state
}

export default useSelectedProduct
