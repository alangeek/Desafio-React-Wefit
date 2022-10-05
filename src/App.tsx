import { ThemeProvider } from 'styled-components'

import { CartProvider } from './hooks/useCart'

import { AppRoutes } from './routes'

import GlobalStyles from './styles/global'
import { theme } from './styles/themes/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <AppRoutes />
        <GlobalStyles />
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
