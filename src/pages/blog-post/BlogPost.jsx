import {useParams} from "react-router-dom"

function BlogPost() {
    const {id} = useParams();

    return (
        <div>Het blognummer is {id}</div>
    )
}

export default BlogPost;