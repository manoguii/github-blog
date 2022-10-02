import { ProfileContainer, ProfileContent } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useContext } from 'react'
import { BlogContext } from '../../../contexts/BlogContext'

export function Profile() {
  const { profile } = useContext(BlogContext)

  const element = <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
  const gitHub = <FontAwesomeIcon icon={faGithub} />
  const building = <FontAwesomeIcon icon={faBuilding} />
  const user = <FontAwesomeIcon icon={faUserGroup} />

  return (
    <>
      {profile.map((profileUser) => {
        return (
          <ProfileContainer key={profileUser.id}>
            <img src={profileUser.avatar_url} alt="" />
            <ProfileContent>
              <header>
                <h2>{profileUser.name}</h2>
                <a href={profileUser.html_url}>
                  github
                  {element}
                </a>
              </header>
              <p>{profileUser.bio}</p>
              <footer>
                <span>
                  {gitHub}
                  {profileUser.login}
                </span>
                <span>
                  {building}
                  {profileUser.company}
                </span>
                <span>
                  {user}
                  <strong>{profileUser.followers}</strong> seguidores
                </span>
              </footer>
            </ProfileContent>
          </ProfileContainer>
        )
      })}
    </>
  )
}
