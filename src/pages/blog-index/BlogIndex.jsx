import "./BlogIndex.css"
import posts from "../../constants/data.json"
import { useNavigate } from "react-router-dom"



function BlogIndex() {
    const navigate = useNavigate();

    function goToPost(e, postId) {
        navigate(`/posts/${postId - 1}`);
    }

    return (
        <main className="outer-container">
            {/* TODO Maybe move the h1 inside the inner container? */}
            <h1>Bekijk alle {posts.length} posts op het platform</h1>
            <div className="inner-container">
                {posts.map((post) => {
                    return <article key={post.id}>
                      <h2 onClick={(e) => {goToPost(e, post.id)}}>{post.title}</h2>
                      <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                    </article>
                })}
            </div>
        </main>
    )
}

export default BlogIndex;