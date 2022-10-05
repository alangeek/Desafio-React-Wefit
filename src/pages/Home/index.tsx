import { MovieCard } from '../../components/MovieCard'
import { Container } from './styles'

import { api } from '../../services/api'
import { useEffect, useState } from 'react'

interface dataProps {
  id: number
  title: string
  price: number
  image: string
}

export function Home() {
  const [products, setProducts] = useState<dataProps[]>([])

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<dataProps[]>(`/products`)
      const data: dataProps[] = response.data
      setProducts(data)
    }

    loadProducts()
  }, [])

  return (
    <Container>
      {products.map(products => (
        <MovieCard
          key={products.id}
          title={products.title}
          image={products.image}
          price={products.price}
          id={products.id}
        />
      ))}
    </Container>
  )
}
