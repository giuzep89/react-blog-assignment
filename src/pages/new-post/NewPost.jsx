import "./NewPost.css"
import {useForm} from "react-hook-form";
import {calculateReadingTime} from "../../helpers/calculateReadingTime.js";
import Input from '../../components/input/Input.jsx';
import Textarea from "../../components/textarea/Textarea.jsx";
import Button from "../../components/button/Button.jsx";
import {useState} from "react";
import {getAllPosts, createPost} from "../../helpers/api.js";
import {Link} from "react-router-dom";

function NewPost() {
    const {register, handleSubmit, formState: {errors, isSubmitted}} = useForm();
    const [response, setResponse] = useState(false);
    const [error, setError] = useState(false);
    const [newPost, setNewPost] = useState({});

    async function submitPost({title, subtitle, content, author, created, readTime}) {
        try {
            await createPost({
                title,
                subtitle,
                content,
                author,
                created,
                readTime,
                comments: 0,
                shares: 0
            });
            setResponse(true);
        } catch (e) {
            console.error(e);
            setError(true);
        }
    }

    async function getCreatedPost() {
        const allPosts = await getAllPosts();
        const lastPost = allPosts[allPosts.length - 1];
        setNewPost(lastPost);
    }

    async function handleFormSubmit(formData) {
        const readingTime = calculateReadingTime(formData.content.length);
        const timeOfSubmit = new Date();
        const updatedFormData = {
            ...formData,
            readTime: readingTime,
            created: timeOfSubmit.toISOString()
        };

        try {
            await submitPost(updatedFormData);
            await getCreatedPost();
        } catch (e) {
            console.error(e);
            setError(true);
        }
    }


    return (
        <main className="outer-container new-post">
            <div className="inner-container">
                <h1>Post toevoegen</h1>

                {response && isSubmitted &&
                    <span>De blogpost is succesvol toegevoegd. Je kunt deze <Link className="link"
                        to={`/posts/${newPost.id}`}>hier</Link> bekijken</span>}

                {error &&
                    <span className="error-message page-error">Er is een fout opgetreden :(</span>}

                {!response && !error && (

                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <Input label="Titel" type="text" name="title" register={register} required={true}/>
                        {errors.title && <span className="error-message field-error">Titel vereist</span>}

                        <Input label="Subtitel" type="text" name="subtitle" register={register} required={true}/>
                        {errors.subtitle && <span className="error-message field-error">Subtitel vereist</span>}

                        <Input label="Naam en achternaam" type="text" name="author" register={register}
                               required={true}/>
                        {errors.author && <span className="error-message field-error">Naam vereist</span>}

                        <Textarea label="Blogpost" register={register} name="content" required={true} minLength={300}
                                  maxLength={2000}/>
                        {errors.content && errors.content.type === "minLength" && <span
                            className="error-message field-error">De blogpost moet minimaal 300 tekens lang zijn.</span>}
                        {errors.content && errors.content.type === "maxLength" && <span
                            className="error-message field-error">De blogpost mag maximaal 2000 tekens lang zijn.</span>}

                        <Button className="form-submit-button" type="submit" text="Toevoegen"/>
                    </form>

                )}
            </div>
        </main>
    )
}

export default NewPost;