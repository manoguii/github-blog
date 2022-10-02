import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface ContextProp {
  children: ReactNode
}

export interface ProfileTypes {
  avatar_url: string
  bio: string
  id: number
  followers: number
  name: string
  login: string
  company: string
  html_url: string
}

interface IssuesTypes {
  created_at: string
  id: number
  title: string
  body: string
}

interface ContextTypes {
  issues: IssuesTypes[]
  searchIssue: (query: string) => Promise<void>
}

export const BlogContext = createContext({} as ContextTypes)

const user = 'manoguii'
const repoName = 'github-blog'

export function BlogContextContainer({ children }: ContextProp) {
  const [issues, setIssues] = useState<IssuesTypes[]>([])

  const searchIssue = useCallback(async (query?: string) => {
    const search = await api.get('/search/issues', {
      params: {
        q: query + `repo:${user}/${repoName}`,
      },
    })
    setIssues(search.data.items)
  }, [])

  async function IssuesRepo() {
    const fetchIssues = await api
      .get(`/search/issues?q=repo:${user}/${repoName}`)
      .then((response) => response.data.items)
    setIssues(fetchIssues)
  }

  useEffect(() => {
    IssuesRepo()
  }, [])

  return (
    <BlogContext.Provider
      value={{
        issues,
        searchIssue,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
