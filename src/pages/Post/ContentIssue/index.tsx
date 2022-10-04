import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { ContentProps } from '..'
import { IssueContainer } from './styles'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export function ContentIssue({ issuesInfo }: ContentProps) {
  return (
    <IssueContainer>
      <ReactMarkdown
        // eslint-disable-next-line react/no-children-prop
        children={issuesInfo.body}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                // eslint-disable-next-line react/no-children-prop
                children={String(children).replace(/\n$/, '')}
                style={dracula as any}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
        }}
      />
    </IssueContainer>
  )
}
