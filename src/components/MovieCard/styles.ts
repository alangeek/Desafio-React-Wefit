import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 225px;
  width: 100%;
  min-width: 150px;

  padding: 10px;
  margin: 6px;
  gap: 8px;

  border-radius: 4px;

  background: ${props => props.theme.containerBackgroundColor};

  font-size: 10px;

  span {
    flex: 1;
    display: flex;
    align-items: center;

    font-weight: 400;

    svg {
      margin-right: 3px;
    }
  }

  button {
    width: 100%;
    text-transform: uppercase ;
  }
`

export const Title = styled.div`
  font-size: 0.875rem;
`

export const Price = styled.div`
  width: 100%;
  text-align: left;
`
