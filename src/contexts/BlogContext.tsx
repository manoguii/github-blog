import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface ContextProp {
  children: ReactNode
}

interface ProfileTypes {
  avatar_url: string
  bio: string
  id: number
  followers: number
  name: string
  login: string
  company: string
}

interface IssuesTypes {
  created_at: string
  id: number
  title: string
  body: string
}

interface ContextTypes {
  profile: ProfileTypes[]
  issues: IssuesTypes[]
  searchIssue: (query: string) => Promise<void>
}

export const BlogContext = createContext({} as ContextTypes)

export function BlogContextContainer({ children }: ContextProp) {
  const [profile, setProfile] = useState<ProfileTypes[]>([])
  const [issues, setIssues] = useState<IssuesTypes[]>([])

  async function fetchProfile() {
    const user = await api.get('/users/daltonmenezes').then((response) => {
      return response.data
    })

    setProfile([user])
  }

  async function searchIssue(query?: string) {
    const search = await api.get('/search/issues', {
      params: {
        q: query + ' repo:daltonmenezes/netflix-list-exporter',
      },
    })
    setIssues(search.data.items)
  }

  async function IssuesRepo() {
    const fetchIssues = await api
      .get('/search/issues?q=repo:daltonmenezes/netflix-list-exporter')
      .then((response) => response.data.items)
    setIssues(fetchIssues)
  }

  useEffect(() => {
    fetchProfile()
    IssuesRepo()
  }, [])

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
