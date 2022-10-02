import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { BlogContextContainer } from './contexts/BlogContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <BlogContextContainer>
          <Router />
        </BlogContextContainer>
      </ThemeProvider>
    </BrowserRouter>
  )
}
