import { ProfileContainer } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="" alt="" />
      <div>
        <header>
          <h2>Cameron Williamson</h2>
          <a href="#">
            github
            <span></span>
          </a>
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <footer>
          <span>cameronwll</span>
          <span>Rocketseat</span>
          <span>
            <strong>32</strong> seguidores
          </span>
        </footer>
      </div>
    </ProfileContainer>
  )
}
