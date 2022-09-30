import styled from 'styled-components'
import rectangle from '../../assets/rectangle.svg'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.Profile};
  background-image: ${() => `url(${rectangle})`};
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img:nth-child(2) {
    align-self: baseline;
    padding-top: 2.5rem;
  }
`
