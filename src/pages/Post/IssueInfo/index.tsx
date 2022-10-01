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

export function IssueInfo() {
  const element = <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
  const gitHub = <FontAwesomeIcon icon={faGithub} />
  const calendar = <FontAwesomeIcon icon={faCalendarDay} />
  const user = <FontAwesomeIcon icon={faComment} />
  const voltar = <FontAwesomeIcon icon={faChevronLeft} />

  return (
    <IssueContainer>
      <IssueContent>
        <header>
          <NavLink to="/">{voltar}voltar</NavLink>
          <a href="#">
            ver no github
            {element}
          </a>
        </header>
        <h2>JavaScript data types and data structures</h2>
        <footer>
          <span>{gitHub}cameronwll</span>
          <span>{calendar}Há 1 dia</span>
          <span>
            {user}
            <strong>5</strong> comentários
          </span>
        </footer>
      </IssueContent>
    </IssueContainer>
  )
}
