import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  display: flex;

  /* Faz quebra de linha do flex */
  flex-wrap: wrap;

  padding: 6px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`
