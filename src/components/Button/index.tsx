import { ReactNode } from 'react'
import { Container } from './styles'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
}

// Passando children para alterar elementos dentro do botão
// Passando onclick para alterar o funcionamento
// Passando ...rest para alterar classes
export function Button({ children, onClick, ...rest }: ButtonProps) {
  return (
    <Container {...rest} onClick={onClick}>
      {children}
    </Container>
  )
}
