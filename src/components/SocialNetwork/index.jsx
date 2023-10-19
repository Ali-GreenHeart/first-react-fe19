import Input, { TextArea } from "../Input"
import Button from "../Button"
import styles from "./index.module.css"
import React, { useEffect, useState } from "react"
import axios from "axios"

const _url = 'https://6530c2906c756603295eff06.mockapi.io/posts'

const SocialNetwork = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get(_url)
            .then(({ data }) => {
                setPosts(data)
            })
    }, [])

    return (
        <>
            <div className={styles.inputContainer}>
                <Input placeholder="enter post's title" />
                <TextArea placeholder="enter post's description" />
                <Button title="POST IT!" />
            </div>
            <div className={styles.postsContainer}>
                {
                    posts.map((post) => {
                        return (
                            <React.Fragment key={post.id}>
                                <h4>{post.title}</h4>
                                <p>{post.description}</p>
                                <hr />
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </>
    )
}
export default SocialNetwork
