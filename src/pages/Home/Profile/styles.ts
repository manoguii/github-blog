import styled from 'styled-components'

export const ProfileContainer = styled.aside`
  padding: 2rem;
  margin-top: -5rem;
  position: relative;

  background: ${(props) => props.theme.Profile};
  box-shadow: 0px 2px 48px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`
