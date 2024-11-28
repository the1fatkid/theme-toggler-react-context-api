import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import './index.css'
export default function FancyThemeToggler() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const appStyle= {
        backgroundColor: theme === "light"? "#fffcf2": "#00171f", 
    }
    const lightTextStyles= {
        position:"absolute",
        top: "35px",
        right:" 150px"
    }
    const darkTextStyles= {
        position:"absolute",
        top: "35px",
        right:"20px",
        color:"white"
    }
    const roundToggleButtonStyles={
        backgroundColor: theme === "light"? "#ffcc00": "#7fc8f8",
        left: theme === "light"? "3px" : "", 
        right: theme === "light"? "": "3px"
    }
    return (
        <main style={appStyle}>
           
            {theme=== 'light' && <p style={lightTextStyles}>Light</p>}

            <div className="toggleSwitch" 
                style={{ backgroundColor: theme === "light"? "#fee79a": "#172d3ae7"}}>
               
                    <div className="roundToggleButton" 
                        onClick={toggleTheme} 
                        style={roundToggleButtonStyles}>
                            {theme === "light"? 
                            <i className="fa-solid fa-sun"></i> : 
                            <i className="fa-solid fa-moon"></i>
                            }
                        
                    </div>
            </div>

            {theme=== 'dark' && <p style={darkTextStyles}>Dark</p>}

        </main>
    )
}
