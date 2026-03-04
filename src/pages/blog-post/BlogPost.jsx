import {Link, useParams} from "react-router-dom"
import {useEffect, useState} from "react";
import {formatDate} from "../../helpers/formatDate.js";
import Footer from "../../components/footer/Footer.jsx";
import Button from "../../components/button/Button.jsx";
import "./BlogPost.css"
import {getPostById, deletePostById} from "../../helpers/api.js";


function BlogPost() {
    const {id} = useParams();
    const [error, setError] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [post, setPost] = useState({});
    const {
        title = "",
        subtitle = "",
        author = "",
        created = "",
        content = "",
        comments = 0,
        shares = 0,
        readTime = 0
    } = post;

    useEffect(() => {
        async function fetchPost() {
            setError(false);
            try {
                const post = await getPostById(id);
                setPost(post);
            } catch (e) {
                console.error(e);
                setError(true);
            }
        }
        fetchPost();
    }, [id]);

    async function handleDeletePost(id) {
        try{
            const result = await deletePostById(id);
            setDeleted(true);
        } catch(e) {
            console.error(e);
            setError(true);
        }
    }

    // Down here I implement a different way of handling an error in fetching the data compared to
    // what I used in BlogIndex.jsx (there I use an if-statement construction),
    // purely to experiment with a different solution! The if-construction is still probably
    // more readable than this, because you clearly say: if this happens return THIS, otherwise
    // return THAT.

    return (
        <>
            <main className="outer-container blog-post">
                {error && <p className="error-message">Er is een fout opgetreden :(</p>}

                {!error && deleted && (
                    <span>Blogpost verwijderd. Klik <Link className="link" to="/posts">hier</Link> om terug naar de index te gaan</span>
                )}

                {!error && !deleted && (
                <div className="inner-container">
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <p>Geschreven door {author} op {formatDate(created)}</p>
                    <p className="reading-time">⏱️{readTime} minuten lezen</p>
                    <p>{content}</p>
                    <p className="comments-shares">{comments} reacties - {shares} keer gedeeld</p>
                    <Button type="button" className="delete-button" onClick={() => handleDeletePost(id)} text="Verwijder blogpost"/>
                    <Link to="/posts" className="link"> ⟨ Terug naar de overzichtpagina</Link>
                </div>
                )}
            </main>
            <Footer/>
        </>
    )
}

export default BlogPost;