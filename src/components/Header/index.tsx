import { HeaderContainer, HeaderContent } from './styles'
import effectLeft from '../../assets/effect_left.svg'
import effectRight from '../../assets/effect_right.svg'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={effectLeft} alt="" />
        <img src={logo} alt="" />
        <img src={effectRight} alt="" />
      </HeaderContent>
    </HeaderContainer>
  )
}
