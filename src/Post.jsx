export default function Post ({post}) {
    console.log(post);
    const {title, body} = post;
    return (
        <div className="card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}