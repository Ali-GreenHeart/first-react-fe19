// import "./index.css"
import { useContext } from "react"
import Navigation from "../Navigation"
import styles from "./index.module.css"
import { AuthContext } from "../../context-api/AuthContext"
import { ModeContext } from "../../context-api/ModeContext"

const Header = () => {
    const [data, setData] = useContext(AuthContext)
    const [isDark, changeMode] = useContext(ModeContext)


    return (
        <header className={styles.header}>
            <img className={styles.img} src="/vite.svg" alt="vite logo" />
            <h1 className={styles.header_heading}>Our First React by {data.name} </h1>
            <button onClick={() => {
                setData((pre) => ({ ...pre, name: 'hafez' }))
            }}>click</button>
            <button onClick={changeMode}>  {isDark ? "🌄" : "🌙"}</button>
            <Navigation />
        </header>
    )
}
export default Header
