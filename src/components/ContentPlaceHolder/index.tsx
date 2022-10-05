import { ActionButton, Container } from './styles'

import { ReactComponent as NoContent } from '../../assets/NoContent.svg'
import { ReactNode } from 'react'
import { CustomLink } from '../CustomLink'

interface ContentPlaceHolderProps {
  actionButtonContent: ReactNode
}

export function ContentPlaceHolder({
  actionButtonContent,
}: ContentPlaceHolderProps) {
  return (
    <Container>
      {'Parece que não há nada por aqui :('}
      <NoContent />
      <CustomLink route="/">
        <ActionButton>{actionButtonContent}</ActionButton>
      </CustomLink>
    </Container>
  )
}
