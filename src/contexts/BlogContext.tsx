import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'
import moment from 'moment'

interface ContextProp {
  children: ReactNode
}

export interface IssuesTypes {
  created_at: string
  id: number
  title: string
  body: string
  number: number
  comments: string
  login: string
  html_url?: string
  user?: {
    login?: string
  }
  newDate?: string
}

interface ContextTypes {
  issues: IssuesTypes[]
  searchIssue: (query: string) => Promise<void>
  formatterDate: (date: string) => string
}

export const BlogContext = createContext({} as ContextTypes)

const userProfile = 'manoguii'
const repoName = 'github-blog'

export function BlogContextContainer({ children }: ContextProp) {
  const [issues, setIssues] = useState<IssuesTypes[]>([])

  function formatterDate(date: string) {
    return moment(date).toNow(true)
  }

  const searchIssue = useCallback(async (query?: string) => {
    const search = await api.get('/search/issues', {
      params: {
        q: query + `repo:${userProfile}/${repoName}`,
      },
    })
    setIssues(search.data.items)
  }, [])

  const IssuesRepo = useCallback(async () => {
    const fetchIssues = await api.get(
      `/search/issues?q=repo:${userProfile}/${repoName}`,
    )

    setIssues(fetchIssues.data.items)
  }, [])

  useEffect(() => {
    IssuesRepo()
  }, [IssuesRepo])

  return (
    <BlogContext.Provider
      value={{
        issues,
        searchIssue,
        formatterDate,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
