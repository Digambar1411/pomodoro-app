import { useContext, createContext, useState, useEffect, useLayoutEffect} from "react";

const ThemeContext = createContext();
const useTheme =()=>useContext(ThemeContext);

const ThemeProvider =({children})=>{

    const preferColorSchemeQuery = "(prefers-color-scheme:dark)";

    const giveInitialTheme = () => 
        localStorage.getItem("theme") || 
        (matchMedia(preferColorSchemeQuery).matches ? "dark" : "light");
        
    const [theme, setTheme] = useState(()=>giveInitialTheme());

    const toggleTheme = ()=>{
        setTheme((theme)=>(theme === "light" ? "dark" : "light"))
    }

    useEffect(()=>{
        localStorage.setItem("theme",theme)
    },[theme])

    useLayoutEffect(()=>{
        if(theme==="light"){
            document.documentElement.setAttribute("data-theme","light")
        }
        else{
            document.documentElement.setAttribute("data-theme","dark") 
        }
    },[theme])

    return(
        <ThemeContext.Provider value={{toggleTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export { useTheme, ThemeProvider}