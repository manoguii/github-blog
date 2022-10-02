import { FormContainer } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const searchForm = z.object({
  search: z.string(),
})

type SearchFormInput = z.infer<typeof searchForm>

export function InputForm() {
  const { register, watch } = useForm<SearchFormInput>({
    resolver: zodResolver(searchForm),
  })

  watch('search')
  return (
    <FormContainer>
      <header>
        <h4>Publicações</h4>
        <span>
          <strong>6</strong> publicações
        </span>
      </header>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('search')}
      />
    </FormContainer>
  )
}
