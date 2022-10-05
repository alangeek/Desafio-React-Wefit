import { Button } from '../Button'
import { Container, Price, Title } from './styles'

import { ReactComponent as Cart } from '../../assets/Cart.svg'
import { useCart } from '../../hooks/useCart'
import { format } from '../../utils/format'

interface MovieCardProps {
  id: number
  title: string
  price: number
  image: string
}

export function MovieCard({ title, price, image, id }: MovieCardProps) {
  const { addProduct, cart } = useCart()

  const amount = cart.find(c => c.id === id)?.amount || 0

  function handleAddProduct(id: number) {
    addProduct(id)
  }

  return (
    <Container>
      <img src={image} alt="Viúva Negra" />
      <Title>{title}</Title>
      <Price>{format(price)}</Price>
      <Button onClick={() => handleAddProduct(id)}>
        <span>
          <Cart />
          {amount}
        </span>
        Adicionar ao carrinho
      </Button>
    </Container>
  )
}
