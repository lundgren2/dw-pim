/* eslint-disable */
import { useEffect, useContext } from 'react'
import { API_URL } from '../config/app'
import {
  ProductContext,
  FETCH_INIT,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from '../context'

const getProduct = async id => {
  const response = await fetch(`${API_URL}/products/${id}`)
  const { data: product } = await response.json()
  return product
}

const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`)
  const { data } = await response.json()
  const products = data.map(product => getProduct(product.id))
  return products
}

const useFetchProducts = () => {
  const [state, dispatch] = useContext(ProductContext)

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: FETCH_INIT })
      try {
        const products = await Promise.all(await getProducts())
        dispatch({
          type: FETCH_SUCCESS,
          payload: { ...state.data, products: products },
        })
      } catch (error) {
        dispatch({ type: FETCH_FAILURE })
      }
    }
    fetchData()
  }, [])

  return [state]
}

export default useFetchProducts
