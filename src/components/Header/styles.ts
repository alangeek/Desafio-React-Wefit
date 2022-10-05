import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 12px;

  height: 72px;
`

export const Logo = styled.div`
  display: inline-block;

  color: ${props => props.theme.textWhite};
  font-size: 1.25rem;

  line-height: 27px;
`
