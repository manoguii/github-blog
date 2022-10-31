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

  return (
    <IssueContainer>
      <IssueContent>
        <header>
          <NavLink to="/">
            {' '}
            <FontAwesomeIcon icon={faChevronLeft} /> voltar
          </NavLink>
          <a href={issuesInfo.html_url}>
            ver no github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <h2>{issuesInfo.title}</h2>
        <footer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {issuesInfo.user?.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            {`Há ${formatterDate(issuesInfo.created_at)}`}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            <strong>{issuesInfo.comments}</strong> comentários
          </span>
        </footer>
      </IssueContent>
    </IssueContainer>
  )
}
