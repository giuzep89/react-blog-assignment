import "./NewPost.css"
import { useForm } from "react-hook-form";
import { calculateReadingTime } from "../../helpers/calculateReadingTime.js";
import { useNavigate } from "react-router-dom";

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
        <main className="outer-container">
            <div className="inner-container">
                <h1>Post toevoegen</h1>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <label>Titel
                        <input type="text"
                               {...register("title", {required: true})}
                        />
                    </label>
                    <label>Subtitel
                        <input type="text"
                               {...register("subtitle", {required: true})}/>
                    </label>
                    <label>Naam en achternaam
                        <input type="text"
                               {...register("name", {required: true})}/>
                    </label>
                    <label>Blogpost
                        <textarea id="blogpost"
                                  cols="30"
                                  rows="10"
                                  {...register("blogpost", {
                                      required: "Blogpost is required",
                                      minLength: {
                                          value: 300,
                                          message: "De blogpost moet minimaal 300 karakters zijn"
                                      },
                                      maxLength: {
                                          value: 2000,
                                          message: "De blogpost mag niet langer dan 2000 karakters zijn"
                                      }
                                  })}></textarea>
                    </label>
                    <button type="submit">Toevoegen</button>
                </form>
                {/* Possibly apply the following model to implement error messages*/}
                {/*{errors.blogpost && <span style={{color: "red"}}>{errors.blogpost.message}</span>}*/}
            </div>
        </main>
    )
}

export default NewPost;