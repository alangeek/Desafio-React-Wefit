import styled from 'styled-components'

export const Container = styled.button`
  border: none;
  border-radius: 4px;
  background: ${props => props.theme.primaryColor};

  display: flex;

  font-size: 0.75rem;
  color: ${props => props.theme.textWhite};

  gap: 6px;

  padding: 11px 7px;

  white-space: nowrap;

  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
`
