import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../../components/Button'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 4px;

  margin-top: 30px;

  padding: 62px;

  background: ${props => props.theme.containerBackgroundColor};

  font-size: 1.25rem;

  svg {
    margin-top: 22px;
  }
`
export const ActionButton = styled(Button)`
  display: flex;
  justify-content: center;
  margin-top: 60px;

  font-size: 0.875rem;

  width: 180px;
  text-transform: uppercase;
`
export const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`
