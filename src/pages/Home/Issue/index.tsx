import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { BlogContext } from '../../../contexts/BlogContext'
import { Container } from './styles'

export function Issue() {
  const { issues } = useContext(BlogContext)

  return (
    <>
      {issues.map((post) => {
        return (
          <Container key={post.items.id}>
            <header>
              <h3>
                <NavLink to={'/post'}>
                  JavaScript data types and data structures
                </NavLink>
              </h3>
              <div>
                <span>Há 1 dia</span>
              </div>
            </header>
            <section>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in
            </section>
          </Container>
        )
      })}
    </>
  )
}
