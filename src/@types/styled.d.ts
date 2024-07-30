import 'styled-components'; // para estender a tipagem do styledcomponent e não sobrescreve-la
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}