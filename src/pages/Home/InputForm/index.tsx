import { FormContainer } from './styles'

export function InputForm() {
  return (
    <FormContainer action="">
      <header>
        <h4>Publicações</h4>
        <span>
          <strong>6</strong> publicações
        </span>
      </header>
      <input type="text" placeholder="Buscar conteúdo" />
    </FormContainer>
  )
}
