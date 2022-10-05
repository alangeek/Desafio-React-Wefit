import { Link } from 'react-router-dom'
import { CartButton } from '../CartButton'

import { Container, Logo } from './styles'

export function Header() {
  return (
    <Container>
      <Link to="/">
        <Logo>WeMovies</Logo>
      </Link>

      <CartButton />
    </Container>
  )
}
