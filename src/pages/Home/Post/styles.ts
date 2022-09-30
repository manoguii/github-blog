import styled from 'styled-components'

export const PostContainer = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 26rem;

  background: ${(props) => props.theme.Post};
  border-radius: 10px;
  padding: 2rem;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;

    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme.Title};
      max-width: 17.6rem;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme.Span};
    }
  }

  section {
    padding-top: 1.125rem;
  }
`
