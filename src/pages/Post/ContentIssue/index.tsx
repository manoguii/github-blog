import ReactMarkdown from 'react-markdown'
import { ContentProps } from '../IssueInfo'
import { IssueContainer } from './styles'

export function ContentIssue({ issuesInfo }: ContentProps) {
  return (
    <IssueContainer>
      <ReactMarkdown>{issuesInfo.body}</ReactMarkdown>
    </IssueContainer>
  )
}
