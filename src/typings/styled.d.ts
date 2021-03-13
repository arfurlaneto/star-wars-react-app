// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundDark: string;
    backgroundLight: string;
    textDark: string;
    textLight: string;
    textSpecial: string;
  }
}
