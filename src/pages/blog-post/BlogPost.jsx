import {Link, useParams} from "react-router-dom"
import {useEffect, useState} from "react";
import {formatDate} from "../../helpers/formatDate.js";
import Footer from "../../components/footer/Footer.jsx";
import "./BlogPost.css"
import axios from "axios";

function BlogPost() {
    const {id} = useParams();
    const [error, setError] = useState(false);
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
        async function getPostById() {
            setError(false);
            try {
                const response = await
                    axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/${id}`,
                        {
                            headers: {'novi-education-project-id': 'c5b1327a-6c34-419a-8701-6b842cba268c'}
                        });
                setPost(response.data);
                console.log(response.data);
            } catch (e) {
                console.error(e);
                setError(true);
            }
        }
        getPostById();
    }, []);


    // Down here I implement a different way of handling an error in fetching the data compared to
    // what I used in BlogIndex.jsx (there I use an if-statement construction),
    // purely to experiment with a different solution! The if-construction is still probably
    // more readable than this, because you clearly say: if this happens return THIS, otherwise
    // return THAT.

    return (
        <>
            <main className="outer-container blog-post">
                {error && <p className="error-message">Er is een fout opgetreden :(</p>}

                {!error && (
                <div className="inner-container">
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <p>Geschreven door {author} op {formatDate(created)}</p>
                    <p className="reading-time">⏱️{readTime} minuten lezen</p>
                    <p>{content}</p>
                    <p className="comments-shares">{comments} reacties - {shares} keer gedeeld</p>
                    <Link to="/index" className="go-back-link"> ⟨ Terug naar de overzichtpagina</Link>
                </div>
                )}
            </main>
            <Footer/>
        </>
    )
}

export default BlogPost;