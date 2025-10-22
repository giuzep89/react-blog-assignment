import "./NewPost.css"
import { useForm } from "react-hook-form";
import { calculateReadingTime } from "../../helpers/calculateReadingTime.js";
import { useNavigate } from "react-router-dom";
import Input from '../../components/input/Input.jsx';
import Textarea from "../../components/textarea/Textarea.jsx";
import Button from "../../components/button/Button.jsx";

function NewPost() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigateToIndex = useNavigate();

    function handleFormSubmit(formData) {
        const readingTime = calculateReadingTime(formData.blogpost.length);
        const timeOfSubmit = new Date;
        const updatedFormData = {
            ...formData,
            shares: 0,
            comments: 0,
            readTime: readingTime,
            created: timeOfSubmit.toISOString()
        };
        console.log(updatedFormData);
        navigateToIndex("/index");
    }

    return (
        <main className="outer-container new-post">
            <div className="inner-container">
                <h1>Post toevoegen</h1>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <Input label="Titel" type="text" name="title" register={register} required={true} />
                    <Input label="Subtitel" type="text" name="subtitle" register={register} required={true} />
                    <Input label="Naam en achternaam" type="text" name="name" register={register} required={true} />
                    <Textarea label="Blogpost" register={register} name="blogpost" required={true} minLength={300} maxLength={2000} />
                    <Button className="form-submit-button" type="submit" text="Toevoegen" />
                </form>
                {/* Possibly apply the following model to implement error messages*/}
                {/*{errors.blogpost && <span style={{color: "red"}}>{errors.blogpost.message}</span>}*/}
            </div>
        </main>
    )
}

export default NewPost;