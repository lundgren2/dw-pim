import { useContext } from 'react'
import { ProductContext, SELECT_PRODUCT } from '../context'

const useSelectedProduct = id => {
  const [state, dispatch] = useContext(ProductContext)
  dispatch({ type: SELECT_PRODUCT, payload: id })
  return state
}

export default useSelectedProduct
