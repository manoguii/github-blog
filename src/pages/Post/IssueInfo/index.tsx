import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { IssueContainer, IssueContent } from './styles'
import { NavLink, useParams } from 'react-router-dom'
import { IssuesTypes } from '../../../contexts/BlogContext'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../lib/axios'

export function IssueInfo() {
  // const { issuesNumber } = useContext(BlogContext)

  const element = <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
  const gitHub = <FontAwesomeIcon icon={faGithub} />
  const calendar = <FontAwesomeIcon icon={faCalendarDay} />
  const user = <FontAwesomeIcon icon={faComment} />
  const voltar = <FontAwesomeIcon icon={faChevronLeft} />

  const userProfile = 'manoguii'
  const repoName = 'github-blog'

  const [issuesNumber, setIssuesNumber] = useState<IssuesTypes>(
    {} as IssuesTypes,
  )
  const { id } = useParams()

  const detailsIsuue = useCallback(async () => {
    const fetchIssues = await api.get(
      `/repos/${userProfile}/${repoName}/issues/${id}`,
    )
    console.log(fetchIssues)
    setIssuesNumber(fetchIssues.data)
  }, [id])

  useEffect(() => {
    detailsIsuue()
  }, [detailsIsuue])

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
        <h2>{issuesNumber.title}</h2>
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
