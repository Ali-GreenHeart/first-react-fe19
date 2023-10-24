// import "./index.css"
import { useContext } from "react"
import Navigation from "../Navigation"
import styles from "./index.module.css"
import { AuthContext } from "../../context-api/AuthContext"
import { ModeContext } from "../../context-api/ModeContext"
import { ManyModeContext } from "../../context-api/ManyModeContext"

const Header = () => {
    const [data, setData] = useContext(AuthContext)
    // const [isDark, changeMode] = useContext(ModeContext)
    const [emoji, changeManyMode, btnClass] = useContext(ManyModeContext)

    return (
        <header className={styles.header}>
            <img className={styles.img} src="/vite.svg" alt="vite logo" />
            <h1 className={styles.header_heading}>Our First React by {data.name} </h1>
            <button onClick={() => {
                setData((pre) => ({ ...pre, name: 'hafez' }))
            }}>click</button>
            {/* <button onClick={changeMode}>  {isDark ? "🌄" : "🌙"}</button> */}
            <button onClick={changeManyMode} className={`many-mode-button ${btnClass.concat('Btn')}`}>{emoji}</button>
            <Navigation />
        </header>
    )
}
export default Header
