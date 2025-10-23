import "./BlogIndex.css"
import {useNavigate} from "react-router-dom"
import {useEffect, useState} from "react";
import axios from "axios";


function BlogIndex() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    function goToPost(postId) {
        navigate(`/posts/${postId - 1}`);
    }

    useEffect(() => {
        async function fetchAllPosts() {
            setError(false);
            try {
                const result = await
                    axios.get("https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts",
                        {
                            headers: {'novi-education-project-id': 'c5b1327a-6c34-419a-8701-6b842cba268c'}
                        });
                setPosts(result.data);
                console.log(result);
            } catch (e) {
                console.error(e);
                setError(true);
            }
        }

        fetchAllPosts();
    }, []);

    return (
        <>
            <main className="outer-container">

                {error ? <p style={{color: "red"}}>Er is een fout opgetreden :(</p> :
                    <>
                        <h1>Bekijk alle {posts.length} posts op het platform</h1>
                        <div className="inner-container posts-list">
                            {Object.keys(posts).length > 0 &&
                                posts.map((post) => {
                                    return <article key={post.id}>
                                        <h2 onClick={() => {
                                            goToPost(post.id)
                                        }}>{post.title} <span>({post.author})</span></h2>
                                        <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                                    </article>
                                })
                            }
                        </div>
                    </>}
            </main>
        </>
    )
}

export default BlogIndex;