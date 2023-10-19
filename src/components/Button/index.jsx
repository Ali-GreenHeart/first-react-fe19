import styles from "./index.module.css"

export default function Button({ title, onClick, width }) {
    return (
        <button style={{ width: width }} className={styles.button} onClick={onClick} >
            {title}
        </button >
    )
}
