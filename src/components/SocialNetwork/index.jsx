import Input, { TextArea } from "../Input"
import Button from "../Button"
import styles from "./index.module.css"
import React, { useEffect, useState } from "react"
import axios from "axios"

const _url = 'https://6530c2906c756603295eff06.mockapi.io/posts'

const getPosts = (_setPosts) => {
    axios.get(_url)
        .then(({ data }) => {
            _setPosts(data)
        })
}

const SocialNetwork = () => {
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        getPosts(setPosts)
    }, [])

    const handleSubmit = () => {
        if (title.length < 4 || description.length < 6) {
            alert('title-i ve description-u dogru yazin! En azi 3 simvolluq title olsun, 5 simvolluq description')
            return;
        }
        axios.post(_url, { title: title, description })
            .then(() => {
                getPosts(setPosts)
            })
        setTitle('')
        setDescription('')
    }
    return (
        <>
            <div className={styles.inputContainer}>
                <Input
                    onEnter={handleSubmit}
                    value={title}
                    onChange={setTitle}
                    placeholder="enter post's title" />
                <TextArea
                    onEnter={handleSubmit}

                    value={description}
                    onChange={setDescription}
                    placeholder="enter post's description" />
                <Button onClick={handleSubmit} title="POST IT!" />
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
