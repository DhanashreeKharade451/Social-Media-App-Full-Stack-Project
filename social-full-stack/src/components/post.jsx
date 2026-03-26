function Post({post}){

    const date = new Date(post.createdAt)
console.log("posts")
    return(
        <div key = {post._id}>
            <h3>{post.title}</h3>
            <h2>{post.author.username}</h2>
            <div>{date.toLocaleDateString()}{date.toLocaleTimeString()}</div>
            <p>{post.body}</p>
        </div>
    )
}

export default Post;