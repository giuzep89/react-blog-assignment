import "./BlogIndex.css"
import {useNavigate} from "react-router-dom"
import {useEffect, useState} from "react";
import {getAllPosts} from "../../helpers/api.js";


function BlogIndex() {
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        async function fetchAllPosts() {
            setError(false);
            try {
                const posts = await getAllPosts();
                setAllPosts(posts);
            } catch (e) {
                console.error(e);
                setError(true);
            }
        }
        fetchAllPosts();
    }, []);

    if (error) {
        return (
            <main className="outer-container">
                <p className="error-message">Er is een fout opgetreden :(</p>
            </main>
        );
    }

    return (
        <>
            <main className="outer-container">
                <h1>Bekijk alle {allPosts.length} posts op het platform</h1>
                <div className="inner-container posts-list">
                    {allPosts.length > 0 &&
                        allPosts.map((post) => {
                            return <article key={post.id}>
                                <h2 onClick={() => navigate(`/posts/${post.id}`)}>{post.title} <span>({post.author})</span></h2>
                                <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                            </article>
                        })
                    }
                </div>
            </main>
        </>
    )
}

export default BlogIndex;