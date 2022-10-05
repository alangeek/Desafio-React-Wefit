import styled from 'styled-components'

export const Container = styled.button`
  border: none;
  background: none;

  display: flex;

  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
`

export const LeftSide = styled.div`
  color: ${props => props.theme.textWhite};
  font-weight: 600;
  text-align: right;
  margin-right: 10px;
`

export const Amount = styled.div`
  color: ${props => props.theme.secondaryText};
  font-size: 0.75rem;
`
