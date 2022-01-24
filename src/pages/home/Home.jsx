import Header from "../../header/Header";
import Post from "../../post/Post";
import Sidebar from "../../sidebar/Sidebar";
import "./home.css"

export default function Home() {
    return (
        <>
        <div className="home">
            <Header/>
            <div className="home">
                <Post/>
                <Sidebar/>
            </div>
        </div>
        </>
    );
}