import styled from 'styled-components'

export const ProfileContainer = styled.aside`
  padding: 2rem;
  margin-top: -5rem;
  position: relative;

  background: ${(props) => props.theme.Profile};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;
  gap: 2rem;
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${(props) => props.theme.Title};
    }

    a {
      font-size: 0.75rem;
      font-weight: 700;
      color: ${(props) => props.theme.Bue};
      text-transform: uppercase;
      text-decoration: none;
      padding-top: 10px;

      display: flex;
      gap: 0.5rem;
      align-items: center;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme.Bue};
      }
    }
  }

  p {
  }

  footer {
    display: flex;
    gap: 1.5rem;
    color: ${(props) => props.theme.Subtitle};

    span {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  }
`
