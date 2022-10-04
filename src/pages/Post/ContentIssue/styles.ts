import styled from 'styled-components'

export const IssueContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
  gap: 1rem;
  max-width: 100%;

  a {
    color: ${(props) => props.theme.Span};
    text-decoration: none;
  }

  img {
    width: 90%;
  }

  h1,
  h2,
  h3,
  h4 {
    color: ${(props) => props.theme.Bue};
  }

  ul {
    list-style: inherit;
    padding-left: 1.7rem;
  }

  pre {
    background: ${(props) => props.theme.Post} !important ;
    padding: 1rem !important ;

    > div {
      background: none !important ;
      padding: 0 !important ;
      margin: 0 !important ;

      code {
        line-height: 160%;
      }
    }
  }
`
