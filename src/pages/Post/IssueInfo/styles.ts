import styled from 'styled-components'

export const IssueContainer = styled.aside`
  margin-top: -5rem;
  position: relative;
  padding: 2rem;

  background: ${(props) => props.theme.Profile};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;
  gap: 2rem;
`

export const IssueContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  header {
    display: flex;
    justify-content: space-between;
    margin: 8px;

    a {
      font-size: 0.75rem;
      font-weight: 700;
      color: ${(props) => props.theme.Bue};
      text-transform: uppercase;
      text-decoration: none;
      padding-bottom: 5px;
      line-height: 0;

      display: flex;
      gap: 0.5rem;
      align-items: center;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.Bue};
      }
    }
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.Title};
    padding-top: 1.25rem;
  }

  footer {
    padding-top: 0.5rem;

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
