import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IssuesTypes } from '../../contexts/BlogContext'
import { api } from '../../lib/axios'
import { dateFormatter } from '../../utils/formatter'
import { ContentIssue } from './ContentIssue'
import { IssueInfo } from './IssueInfo'
import { PostContainer } from './styles'

export interface ContentProps {
  issuesInfo: IssuesTypes
}

export function Post() {
  const userProfile = 'manoguii'
  const repoName = 'github-blog'

  const [issuesInfo, setIssuesInfo] = useState<IssuesTypes>({} as IssuesTypes)
  const { number } = useParams()

  const detailsIsuue = useCallback(async () => {
    const fetchIssueInfo = await api.get(
      `repos/${userProfile}/${repoName}/issues/${number}`,
    )
    console.log(fetchIssueInfo)
    const newObj = {
      ...fetchIssueInfo.data,
      newDate: dateFormatter.format(new Date(fetchIssueInfo.data.created_at)),
    }
    setIssuesInfo(newObj)
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
