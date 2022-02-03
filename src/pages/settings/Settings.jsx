import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css"

export default function Settings() {
  return (
  <div className="settings">
    <div className="settingsWrapper">
      <div className="settingsTitle">
        <span className="settingsUpdateTitle">Update Your Account</span>
        <i className="settingsDeleteTitle fas fa-trash"> Delete Account</i>
      </div>
      <form className="settingsForm">
        <label>Profile Picture</label>
        <div className="settingsPP">
          <img src="https://scx1.b-cdn.net/csz/news/800a/2018/1-illuminating.jpg" alt="" />
          <label htmlFor="fileInput">
          <i class="settingsPPIcon fas fa-user-circle"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}}/>
        </div>
        <label>Username</label>
        <input type="text" placeholder="username"></input>
        <label>Email</label>
        <input type="email" placeholder="email"></input>
        <label>Password</label>
        <input type="password" placeholder="atleast 5 charcters"></input>
        <button className="settingsSubmit">Save Changes</button>

      </form>
    </div>
    <Sidebar />
  </div>
  );
}
