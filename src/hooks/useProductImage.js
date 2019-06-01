import { useState, useEffect } from 'react'

const API_URL = 'https://dev-api.danielwellington.com/frontend'

const getAsset = async id => {
  const response = await fetch(`${API_URL}/assets/${id}`)
  const { data } = await response.json()
  return data
}

const useProductImage = id => {
  const [image, setImage] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getAsset(id).then(image => {
      setImage(image)
      setIsLoading(false)
    })
  }, [id])
  return { image, isLoading }
}

export default useProductImage
