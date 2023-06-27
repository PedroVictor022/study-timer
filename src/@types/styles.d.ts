import 'styled-components'
import { defaultTheme } from '../styles/theme/default'

type ThemeType = typeof defaultTheme;

// Edit/Create type for styled-components
declare module 'styled-components' {
   export interface DefaultTheme extends ThemeType {}
}