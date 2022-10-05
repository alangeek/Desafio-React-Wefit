import { ActionButton, Container, CustomLink } from './styles'

import { ReactComponent as SuccessSvg } from '../../assets/Success.svg'

export function Purchase() {
  return (
    <Container>
      <div>Compra realizada com sucesso!</div>
      <SuccessSvg />
      <CustomLink to="/">
        <ActionButton>Voltar</ActionButton>
      </CustomLink>
    </Container>
  )
}
