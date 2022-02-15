import "./register.css";

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input className="registerInput" type="text" placeholder="username..." />
                <label>Email</label>
                <input className="registerInput" type="text" placeholder="email..." />
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="********" />
                <label>Confirm Password</label>
                <input className="registerInput" type="password" placeholder="********" />
                <button className="registerButton">register</button>
            </form>
              <button className="registerLoginButton">Login</button>
        </div>
    );
}