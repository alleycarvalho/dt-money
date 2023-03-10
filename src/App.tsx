import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes'

import { Transactions } from './pages'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transactions />

      <GlobalStyle />
    </ThemeProvider>
  )
}
