// import posts from "../../constants/data.json";
// import {useNavigate} from "react-router-dom";
//
// export default function Card() {
//     const navigate = useNavigate();
//
//     function goToPost(e, postId) {
//         navigate(`/posts/${postId - 1}`);
//     }
//
//     return (
//         <article key={post.id}>
//             <h2 onClick={(e) => {
//                 goToPost(e, post.id)
//             }}>{post.title} <span>({post.author})</span></h2>
//             <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
//         </article>
//     )
//
// }




// I'm going to create a Card component only AFTER it stops depending on the temporary data.json.
// Until then, it makes no sense to create a component so dependent on mapping a JSON file,
// because I'll have to rewrite it completely anyway.