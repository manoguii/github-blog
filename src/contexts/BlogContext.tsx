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
  profile: ProfileTypes[]
  issues: IssuesTypes[]
  searchIssue: (query: string) => Promise<void>
}

export const BlogContext = createContext({} as ContextTypes)

const userProfile = 'GBDev13'
const repoName = 'blog-posts'

export function BlogContextContainer({ children }: ContextProp) {
  const [issues, setIssues] = useState<IssuesTypes[]>([])
  const [profile, setProfile] = useState<ProfileTypes[]>([])

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

  async function fetchProfile() {
    const user = await api.get(`/users/${userProfile}`).then((response) => {
      return response.data
    })

    setProfile([user])
  }

  useEffect(() => {
    fetchProfile()
    IssuesRepo()
  }, [IssuesRepo])

  return (
    <BlogContext.Provider
      value={{
        profile,
        issues,
        searchIssue,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
