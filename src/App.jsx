import ThemeProvider from "./contexts/ThemeProvider";
import FancyThemeToggler from "./FancyThemeToggler";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <FancyThemeToggler/>
      </ThemeProvider>
    </>
  )
}

