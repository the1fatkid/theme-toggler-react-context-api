import { ThemeProvider } from "./ThemeContext";
// import SimpleThemeToggler from "./SimpleThemeToggler";
import FancyThemeToggler from "./FancyThemeToggler";

export default function App() {
  return (
    <>
      <ThemeProvider>
        {/* <SimpleThemeToggler/> */}
        <FancyThemeToggler/>
      </ThemeProvider>
    </>
  )
}

