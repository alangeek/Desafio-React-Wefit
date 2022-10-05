import { ContentPlaceHolder } from '../../components/ContentPlaceHolder'
import { OrderBox } from '../../components/OrderBox'

import { useCart } from '../../hooks/useCart'

import { Container } from './styles'

export function Cart() {
  const { cart } = useCart()
  const cartEmpty = cart.length < 1

  return (
    <Container>
      {/* Exibindo PlaceHolder caso não tenha conteúdo */}
      {cartEmpty ? (
        <ContentPlaceHolder actionButtonContent={'Voltar'} />
      ) : (
        <OrderBox />
      )}
    </Container>
  )
}
