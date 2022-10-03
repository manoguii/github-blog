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
import { ContentIssue } from '../ContentIssue'
// import { dateFormatter } from '../../../utils/formatter'

export interface ContentProps {
  issuesInfo: IssuesTypes
}

export function IssueInfo() {
  const element = <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
  const gitHub = <FontAwesomeIcon icon={faGithub} />
  const calendar = <FontAwesomeIcon icon={faCalendarDay} />
  const user = <FontAwesomeIcon icon={faComment} />
  const chevronLeft = <FontAwesomeIcon icon={faChevronLeft} />

  const userProfile = 'manoguii'
  const repoName = 'github-blog'

  const [issuesInfo, setIssuesInfo] = useState<IssuesTypes>({} as IssuesTypes)
  const { number } = useParams()

  const detailsIsuue = useCallback(async () => {
    const fetchIssueInfo = await api.get(
      `repos/${userProfile}/${repoName}/issues/${number}`,
    )
    setIssuesInfo(fetchIssueInfo.data)
  }, [number])

  useEffect(() => {
    detailsIsuue()
  }, [detailsIsuue])

  return (
    <>
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
              {issuesInfo.created_at}
            </span>
            <span>
              {user}
              <strong>{issuesInfo.comments}</strong> comentários
            </span>
          </footer>
        </IssueContent>
      </IssueContainer>
      <div>
        <ContentIssue issuesInfo={issuesInfo} />
      </div>
    </>
  )
}
