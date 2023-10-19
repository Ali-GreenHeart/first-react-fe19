import Input, { TextArea } from "../Input"
import Button from "../Button"
import styles from "./index.module.css"

const SocialNetwork = () => {
    return (
        <>
            <div className={styles.inputContainer}>
                <Input placeholder="enter post's title" />
                <TextArea placeholder="enter post's description" />
                <Button title="POST IT!" />
            </div>
        </>
    )
}
export default SocialNetwork
