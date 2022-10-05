import 'styled-components'

// Configurando tipagem para tema padrão do styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
