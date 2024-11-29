// This is another way of writing the code where we do not create two different file for ThemeContext and ThemeProvider

import { createContext, useState, useEffect} from "react"

//Create a Context
const ThemeContext= createContext();

function getTheme(){
    const theme= JSON.parse(localStorage.getItem("theme"));
    return theme;
}
//Create a Provider Component
function ThemeProvider({children}){
    const [theme, setTheme]= useState(getTheme);

    useEffect(()=>{
        localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme])

    function toggleTheme(){
        setTheme((prevTheme)=> prevTheme === 'light'? "dark": "light");
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider};
