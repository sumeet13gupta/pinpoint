import { Link } from "react-router-dom";
import "./post.css"

export default function Post({img}) {
    return (
        <div className="post">
            <img
                className="postImg"
                src={img}
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        <Link className="link" to="/posts?cat=Music">
                            Music
                        </Link>
                    </span>
                    <span className="postCat">
                        <Link className="link" to="/posts?cat=Life">
                            Life 
                        </Link>
                    </span>
                </div>
                <span className="postTitle">
                    <Link to="/post/abc" className="link">
                        la la la la laaaaaaaaaa
                    </Link>
                </span>
                <hr />
                <span className="postDate"> 1 hour ago </span>
            </div>
            <p className="postDesc">
                here goes the post that has been fetched from somwhare I don't know
                and then it will be fabricated into beautiful fonts and  appearances using flex boxes
                and Idk what will be done with it later on with it and so bla bla bla.............
            </p>
        </div>
    );
}