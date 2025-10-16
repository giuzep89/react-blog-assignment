import {Link, useParams} from "react-router-dom"
import posts from "../../constants/data.json"
import {formatDate} from "../../helpers/formatDate.js";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer.jsx";

function BlogPost() {
    const {id} = useParams();
    const { title, subtitle, author, created, content, comments, shares, readTime } = posts[id];
    const navigate = useNavigate();

    return (
        <>
            <main className="blog-post-main">
                <div className="blog-post-wrapper">
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <p>Geschreven door {author} op {formatDate(created)}</p>
                    <p>⏱️{readTime} minuten lezen</p>
                    <p>{content}</p>
                    <p>{comments} reacties - {shares} keer gedeeld</p>
                    <Link to="/index"> ⟨ Terug naar de overzichtpagina</Link>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default BlogPost;
