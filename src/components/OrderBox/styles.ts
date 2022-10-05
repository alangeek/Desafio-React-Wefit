import styled from 'styled-components'
import { Button } from '../Button'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 4px;

  margin-top: 30px;

  padding: 13px 10px 0 10px;

  background: ${props => props.theme.containerBackgroundColor};
`

export const Header = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;

  color: ${props => props.theme.secondaryText};
  text-transform:uppercase ;
`

export const Footer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  font-size: 0.75rem;
  color: ${props => props.theme.secondaryText};

  padding-top: 12px;
  border-top: 1px solid ${props => props.theme.secondaryText};

  text-transform:uppercase ;
  span {
    font-size: 1.5rem;
    color: ${props => props.theme.primaryText};
    margin-left: 4px;
  }
`

export const FinishOrderButton = styled(Button)`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
  width: 180px;
  text-transform:uppercase ;
`
