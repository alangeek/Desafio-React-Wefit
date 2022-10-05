import { Amount, Container, LeftSide } from './styles'
import { CustomLink } from '../../components/CustomLink'

import { ReactComponent as Basket } from '../../assets/Basket.svg'
import { useCart } from '../../hooks/useCart'

export function CartButton() {
  const { cart } = useCart()

  return (
    <Container>
      <CustomLink route="/cart">
        <LeftSide>
          <div>Meu Carrinho</div>
          <Amount>{cart.length} items</Amount>
        </LeftSide>
        <Basket />
      </CustomLink>
    </Container>
  )
}
