import { InputForm } from './InputForm'
import { Issue } from './Issue'
import { Profile } from './Profile'
import { HomeContainer, Main } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <InputForm />
      <Main>
        <Issue />
      </Main>
    </HomeContainer>
  )
}
