import "./NewPost.css"
import {useForm} from "react-hook-form";


function NewPost() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    function handleFormSubmit(formData) {
        console.log(formData);
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
                {errors.blogpost && <span style={{color: "red"}}>{errors.blogpost.message}</span>}
            </div>
        </main>
    )
}

export default NewPost;
