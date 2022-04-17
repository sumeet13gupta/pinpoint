import { Link } from "react-router-dom";
import "./post.css"

export default function Post({ post }) {
    return (
        <div className="post">
            {post.photo && (
            <img
                className="postImg"
                src={post.photo}
                alt=""
            />
            )}
            <div className="postInfo">
                <div className="postCats">{
                    post.categories.map((c)=>(
                        <span className="postCat">{c.name}</span>
                    ))}
                    <Link to={`/posts/${post._id}`} className="link">
                        <span className="postTitle">{post.title}</span>
                    </Link>
                </div>
               
                <hr />
                <span className="postDate"> {new Date(post.createdAt).toDateString()} </span>
            </div>
            <p className="postDesc">
                here goes the post that has been fetched from somwhare I don't know
                and then it will be fabricated into beautiful fonts and  appearances using flex boxes
                and Idk what will be done with it later on with it and so bla bla bla.............
            </p>
        </div>
    );
}