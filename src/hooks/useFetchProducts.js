/* eslint-disable */
import { useEffect, useContext } from 'react'
import axios from 'axios'
import { ProductContext } from '../context'
import { API_URL } from '../config/app'

const getProduct = async id => {
  const response = await axios
    .get(`${API_URL}/products/${id}`)
    .then(res => res.data.data)
  return response
}

const getProducts = async () =>
  await axios
    .get(`${API_URL}/products`)
    .then(res => res.data.data.map(product => getProduct(product.id)))

const useFetchProducts = () => {
  const [state, dispatch] = useContext(ProductContext)

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' })
      try {
        const productIds = await getProducts()
        await axios.all(productIds).then(res => {
          dispatch({
            type: 'FETCH_SUCCESS',
            payload: { ...state.data, products: res },
          })
        })
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE' })
      }
    }
    fetchData()
  }, [])

  return [state]
}

export default useFetchProducts
