import {Link, useParams} from "react-router-dom"
import posts from "../../constants/data.json"
import {formatDate} from "../../helpers/formatDate.js";
import Footer from "../../components/footer/Footer.jsx";

function BlogPost() {
    const {id} = useParams();
    const { title, subtitle, author, created, content, comments, shares, readTime } = posts[id];

    return (
        <>
            <main className="outer-container">
                <div className="inner-container">
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
