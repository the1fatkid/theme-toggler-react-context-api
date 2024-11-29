import { useState } from "react";
import ThemeContext from "./ThemeContext";

//Using local storage
function getTheme() {
    const theme = JSON.parse(localStorage.getItem("theme"));
    return theme;
}

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(getTheme);

    function toggleTheme() {
        setTheme((prevTheme) => prevTheme === 'light' ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;