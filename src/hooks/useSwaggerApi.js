import { useEffect, useReducer } from 'react'
import axios from 'axios'

const API_URL = 'https://dev-api.danielwellington.com/frontend'

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, isLoading: true, isError: false }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    default:
      throw new Error()
  }
}

const getProduct = async id => {
  const response = await axios
    .get(`${API_URL}/products/${id}`)
    .then(res => res.data.data)
  console.log(response)
  return response
}

const getProducts = async () =>
  await axios
    .get(`${API_URL}/products`)
    .then(res => res.data.data.map(product => getProduct(product.id)))

const getAsset = async id =>
  await axios.get(`${API_URL}/asset/${id}`).then(res => res.data.data)

const useHackerNewsApi = (initialEndpoint, initialData) => {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData
  })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' })
      try {
        const productIds = await getProducts()
        await axios.all(productIds).then(res => {
          dispatch({ type: 'FETCH_SUCCESS', payload: res })
        })
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE' })
      }
    }
    fetchData()
  }, [])

  return [state]
}

export default useHackerNewsApi
