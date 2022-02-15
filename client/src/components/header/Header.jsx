import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm"> INSCRIPTIONS </span>
            </div>
            <img
                className="headerImg"
                src="https://www.abcasemat.fi/uploads/pages/3177_kokouskuva-1008x560-2.jpg"
                alt=""
            />
        </div>
    );
}