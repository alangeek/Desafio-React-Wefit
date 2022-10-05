import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;

  padding: 8px 0;
  margin: 25px 0 15px;

  max-height: 130px;
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns:
    minmax(auto, 135px)
    minmax(auto, 150px)
    minmax(auto, 150px)
    minmax(auto, 210px)
    minmax(auto, 40px);

  img {
    width: 90px;
    height: 114px;
  }

  svg {
    justify-self: center;
  }
`
export const Product = styled.div`
  display: flex;
  flex-direction: column;
`

export const Amount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input:disabled {
    max-width: 47px;

    margin: 0 6px;
    padding: 0 3px;

    font-size: 0.875rem;
    font-weight: 400;

    background: none;

    border: 1px solid #d9d9d9;
    border-radius: 4px;
  }
`

export const SubTotal = styled.div`
  display: flex;
  justify-content: center;
`

export const GhostButton = styled.button`
  display: flex;

  border: none;
  background: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
