import { InputForm } from './InputForm'
import { Profile } from './Profile'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <InputForm />
    </HomeContainer>
  )
}
