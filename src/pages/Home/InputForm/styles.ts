import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding-top: 4.5rem;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h4 {
      font-size: 1.125rem;
      font-weight: 700;
      color: ${(props) => props.theme.Subtitle};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme.Span};
    }
  }

  input {
    background: ${(props) => props.theme.Input};
    padding: 0.75rem 1rem;
    border: 1px solid ${(props) => props.theme.Border};
    border-radius: 6px;
    margin-top: 0.75rem;
    color: ${(props) => props.theme.Text};

    &::placeholder {
      color: ${(props) => props.theme.Label};
    }
  }
`
