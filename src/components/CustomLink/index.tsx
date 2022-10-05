import { ReactNode } from 'react'
import { StyledLink } from './styles'

interface CustomLinkProps {
  children: ReactNode
  route: string
}

export function CustomLink({ route, children }: CustomLinkProps) {
  return <StyledLink to={route}>{children}</StyledLink>
}
