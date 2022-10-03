import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { BlogContext } from '../../../contexts/BlogContext'
import { dateFormatter } from '../../../utils/formatter'
import { Container } from './styles'

export function Issue() {
  const { issues } = useContext(BlogContext)

  return (
    <>
      {issues.map((post) => {
        const LIMIT = 185
        const text = post.body
        const aboveLimit = text.length > LIMIT
        const dotsOrEmpty = aboveLimit ? ' ...' : ''
        const result = text.substring(0, LIMIT) + dotsOrEmpty

        return (
          <Container key={post.id}>
            <header>
              <h3>
                <NavLink to={`/post/${post.number}`}>{post.title}</NavLink>
              </h3>
              <div>
                <span>{dateFormatter.format(new Date(post.created_at))}</span>
              </div>
            </header>
            <section>{result}</section>
          </Container>
        )
      })}
    </>
  )
}
