import { Button } from "./components/ButtonContainer";
import { ButtonDivision } from "./components/ButtonContainer.styled";

import { defaultTheme } from "./components/styles/themes/default";

import { GlobalStyles } from "./components/styles/themes/global";
import { ThemeProvider } from 'styled-components';


export default function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
          <ButtonDivision>
            <Button variant="primary" />
            <Button variant="secondary" />
            <Button variant="success" />
            <Button variant="danger" />
          </ButtonDivision>
          <GlobalStyles />
      </ThemeProvider>
    </div>
  )
}
