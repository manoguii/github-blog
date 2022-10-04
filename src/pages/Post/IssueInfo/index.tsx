import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { IssueContainer, IssueContent } from './styles'
import { NavLink } from 'react-router-dom'
import { ContentProps } from '..'
import { BlogContext } from '../../../contexts/BlogContext'
import { useContext } from 'react'

export function IssueInfo({ issuesInfo }: ContentProps) {
  const { formatterDate } = useContext(BlogContext)
  const element = <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
  const gitHub = <FontAwesomeIcon icon={faGithub} />
  const calendar = <FontAwesomeIcon icon={faCalendarDay} />
  const user = <FontAwesomeIcon icon={faComment} />
  const chevronLeft = <FontAwesomeIcon icon={faChevronLeft} />

  return (
    <IssueContainer>
      <IssueContent>
        <header>
          <NavLink to="/">{chevronLeft}voltar</NavLink>
          <a href={issuesInfo.html_url}>
            ver no github
            {element}
          </a>
        </header>
        <h2>{issuesInfo.title}</h2>
        <footer>
          <span>
            {gitHub}
            {issuesInfo.user?.login}
          </span>
          <span>
            {calendar}
            {`Há ${formatterDate(issuesInfo.created_at)}`}
          </span>
          <span>
            {user}
            <strong>{issuesInfo.comments}</strong> comentários
          </span>
        </footer>
      </IssueContent>
    </IssueContainer>
  )
}
