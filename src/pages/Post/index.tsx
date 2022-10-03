import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IssuesTypes } from '../../contexts/BlogContext'
import { api } from '../../lib/axios'
import { ContentIssue } from './ContentIssue'
import { IssueInfo } from './IssueInfo'
import { PostContainer } from './styles'

export interface ContentProps {
  issuesInfo: IssuesTypes
}

export function Post() {
  const userProfile = 'GBDev13'
  const repoName = 'blog-posts'

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
    <PostContainer>
      <IssueInfo issuesInfo={issuesInfo} />
      <ContentIssue issuesInfo={issuesInfo} />
    </PostContainer>
  )
}
