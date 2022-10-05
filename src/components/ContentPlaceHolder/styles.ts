import styled from 'styled-components'

import { Button } from '../Button'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 4px;

  margin-top: 30px;

  padding: 62px;

  background: ${props => props.theme.containerBackgroundColor};

  svg {
    margin-top: 50px;
  }
`

export const ActionButton = styled(Button)`
  display: flex;
  justify-content: center;
  margin-top: 60px;

  font-size: 0.875rem;

  width: 180px;
`
