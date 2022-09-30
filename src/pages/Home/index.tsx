import { InputForm } from './InputForm'
import { Post } from './Post'
import { Profile } from './Profile'
import { HomeContainer, Main } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <InputForm />
      <Main>
        <Post />
        <Post />
        <Post />
        <Post />
      </Main>
    </HomeContainer>
  )
}
