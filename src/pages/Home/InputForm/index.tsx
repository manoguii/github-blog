import { FormContainer } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useContext } from 'react'
import { BlogContext } from '../../../contexts/BlogContext'

const searchForm = z.object({
  search: z.string(),
})

type SearchFormInput = z.infer<typeof searchForm>

export function InputForm() {
  const { issues } = useContext(BlogContext)

  const { searchIssue } = useContext(BlogContext)
  const { register, handleSubmit, watch } = useForm<SearchFormInput>({
    resolver: zodResolver(searchForm),
  })

  async function handleSearchIssue(data: SearchFormInput) {
    searchIssue(data.search)
  }

  const quantityIssues = issues.length

  watch('search')
  return (
    <FormContainer onSubmit={handleSubmit(handleSearchIssue)}>
      <header>
        <h4>Publicações</h4>
        <span>
          <strong>{quantityIssues}</strong> publicações
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
