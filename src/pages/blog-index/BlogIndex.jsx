import "./BlogIndex.css"
import {useNavigate} from "react-router-dom"
import {useEffect, useState} from "react";
import axios from "axios";


function BlogIndex() {
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        async function getAllPosts() {
            setError(false);
            try {
                const result = await
                    axios.get("https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts",
                        {
                            headers: {'novi-education-project-id': 'c5b1327a-6c34-419a-8701-6b842cba268c'}
                        });
                setAllPosts(result.data);
                console.log(result);
            } catch (e) {
                console.error(e);
                setError(true);
            }
        }
        getAllPosts();
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