import styled from 'styled-components'

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 26rem;

  background: ${(props) => props.theme.Post};
  border-radius: 10px;
  padding: 1.8rem;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${(props) => props.theme.Label};
  }

  a {
    text-decoration: none;
    outline: none;
    box-shadow: 0 0 0 0;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;

    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme.Title};
      max-width: 16rem;
      contain: content;
    }

    span {
      font-size: 14px;
      color: ${(props) => props.theme.Span};
    }
  }

  section {
    padding-top: 1.125rem;
    text-transform: lowercase;
    color: ${(props) => props.theme.Text};
    font-size: 1rem;
    font-weight: 400;
    overflow-x: hidden;

    > h1,
    h2,
    h3 {
      font-size: 1rem;
      font-weight: 400;
    }
  }
`
