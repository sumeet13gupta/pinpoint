import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItems">
                <span className="sidebarTitle">ABOUT ME</span>
                <img 
                    src="https://i.etsystatic.com/14652458/r/il/a1518b/1723561800/il_fullxfull.1723561800_tgh1.jpg"
                    width="100"
                    height="100"
                    alt=""
                    
                />
                <br/>
                <p>
                    Some thing Something 
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Link className="link" to="/post?cat=Music">
                            Music
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/post?cat=Sport">
                            Sport
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/post?cat=Style">
                            Style
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/post?cat=Tech">
                            Tech
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/post?cat=Cinema">
                            Cinema
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/post?cat=Life">
                            Life
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle"> FOLLOW US </span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    );
}