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

  async function issueRepository() {
    const search = await api
      .get('/search/issues?q=repo:daltonmenezes/netflix-list-exporter')
      .then((res) => {
        return res.data
      })

    setIssues(search.items)
  }

  useEffect(() => {
    fetchProfile()
    issueRepository()
  }, [])

  return (
    <BlogContext.Provider
      value={{
        profile,
        issues,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
