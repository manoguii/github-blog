import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import { NavLink } from 'react-router-dom'
import { BlogContext } from '../../../contexts/BlogContext'
import { Container } from './styles'

export function Issue() {
  const { issues, formatterDate } = useContext(BlogContext)

  return (
    <>
      {issues.map((post) => {
        const LIMIT = 185
        const text = post.body
        const aboveLimit = text.length > LIMIT
        const dotsOrEmpty = aboveLimit ? ' ...' : ''
        const content = text.substring(0, LIMIT) + dotsOrEmpty

        return (
          <Container key={post.id}>
            <NavLink to={`/post/${post.number}`}>
              <header>
                <h3>{post.title}</h3>
                <div>
                  <span>{`Há ${formatterDate(post.created_at)}`}</span>
                </div>
              </header>
              <section>{<ReactMarkdown>{content}</ReactMarkdown>}</section>
            </NavLink>
          </Container>
        )
      })}
    </>
  )
}
