import { ProfileContainer, ProfileContent } from './styles'
import avatar from '../../../assets/avatar.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Profile() {
  const element = <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
  const gitHub = <FontAwesomeIcon icon={faGithub} />
  const building = <FontAwesomeIcon icon={faBuilding} />
  const user = <FontAwesomeIcon icon={faUserGroup} />
  return (
    <ProfileContainer>
      <img src={avatar} alt="" />
      <ProfileContent>
        <header>
          <h2>Cameron Williamson</h2>
          <a href="#">
            github
            {element}
          </a>
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <footer>
          <span>{gitHub}cameronwll</span>
          <span>{building}Rocketseat</span>
          <span>
            {user}
            <strong>32</strong> seguidores
          </span>
        </footer>
      </ProfileContent>
    </ProfileContainer>
  )
}
