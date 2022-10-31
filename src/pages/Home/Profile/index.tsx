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
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </header>
              <p>{profileUser.bio}</p>
              <footer>
                <span>
                  <FontAwesomeIcon icon={faGithub} />
                  {profileUser.login}
                </span>
                {profileUser.company !== null ? (
                  <span>
                    <FontAwesomeIcon icon={faBuilding} />
                    {profileUser.company}
                  </span>
                ) : null}
                <span>
                  <FontAwesomeIcon icon={faUserGroup} />
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
