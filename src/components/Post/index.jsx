const Post = ({ post, onDelete }) => {
    return (
        <>
            <h4>{post.title}</h4>
            <p>{post.description}</p>
            <button onClick={() => onDelete(post.id)}>❌</button>
            <hr />
        </>
    )
}
export default Post
