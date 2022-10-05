import { OrderItem } from '../OrderItem'

import { useCart } from '../../hooks/useCart'

import { useNavigate } from 'react-router-dom'

import { Container, FinishOrderButton, Footer, Header } from './styles'
import { format } from '../../utils/format'

export function OrderBox() {
  const { cart, clearCart } = useCart()
  const navigate = useNavigate()
  const total = cart.reduce((sum, item) => {
    return sum + item.amount * item.price
  }, 0)

  function finishOrder() {
    clearCart()
    // O Replace faz sumir do topo do navegador a opção de voltar à página anterior
    navigate('/purchase', { replace: true })
  }

  return (
    <Container>
      <Header>
        <div>Produto</div>
        <div>qtd</div>
        <div>Subtotal</div>
      </Header>
      {cart.map(item => (
        <OrderItem key={item.id} {...item} />
      ))}

      <Footer>
        <FinishOrderButton onClick={finishOrder}>
          Finalizar Pedido
        </FinishOrderButton>
        <div>
          Total
          <span>{format(total)}</span>
        </div>
      </Footer>
    </Container>
  )
}
