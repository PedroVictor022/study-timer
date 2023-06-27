import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button/Button'
import { defaultTheme } from './styles/theme/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary">Primary</Button>
    </ThemeProvider>
  )
}

export default App
