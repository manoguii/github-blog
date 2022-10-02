import { createContext, ReactNode, useEffect, useState } from 'react'
import axios from 'axios'

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

interface ContextTypes {
  profile: ProfileTypes[]
}

export const BlogContext = createContext({} as ContextTypes)

export function BlogContextContainer({ children }: ContextProp) {
  const [profile, setProfile] = useState<ProfileTypes[]>([])
  const [issues, setIssues] = useState([])

  async function fetchProfile() {
    const user = await axios
      .get('https://api.github.com/users/daltonmenezes')
      .then((response) => {
        return response.data
      })

    setProfile([user])
  }

  async function issueRepository() {
    const search = await axios
      .get(
        'https://api.github.com/search/issues?q=repo:daltonmenezes/netflix-list-exporter',
      )
      .then((res) => {
        return console.log(res.data)
      })

    setIssues(search)
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
