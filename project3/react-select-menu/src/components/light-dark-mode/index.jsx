import useLocalStorage from "./uesLocalStorage"
import './dark-mode.css'
export default function LightDarkMode(){
    /* 
        Create a custom hook and store local
    */
    const[theme,setTheme] = useLocalStorage('theme','dark')

    function handleToggleTheme(){
        setTheme(theme == 'light' ? 'dark' :'light')
    }

    console.log(theme)

    return(
        <div className="light-dark-mode" data-theme ={theme}>
            <div className="container">
                <p>Welcome!</p>
                <button onClick={handleToggleTheme}>Change Theme</button>
            </div>
        </div>
    )
}