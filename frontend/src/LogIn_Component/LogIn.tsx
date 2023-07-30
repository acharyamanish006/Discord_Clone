import "./css/LogIn.scss";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { LogIn_Context } from "../Context/LogIn_Context";

export default function LogIn() {
  const { LogIn } = useContext(LogIn_Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const myEmail = (e) => {
    setEmail(e.target.value);
    // console.log(email);
  };
  const myPassword = (e) => {
    setPassword(e.target.value);
    // console.log(password);
  };

  const Login = () => {
    if (email) {
      console.log(email);

      if (password) {
        console.log(password);
        LogIn({ email, password });
      }
    } else {
      alert("fill all field");
    }
    // setEmail("");
    // setName("");
    // setPassword("");
  };

  return (
    <div className="mainContainer">
      <div className="position">
        <form className="container">
          <div className="centering-wrapper">
            <div className="section1 text-center">
              <div className="primary-header">Welcome back!</div>
              <div className="secondary-header">
                We're so excited to see you again!
              </div>
              <div className="input-position">
                <div className="form-group">
                  <h5 className="input-placeholder" id="email-txt">
                    Email
                    <span className="error-message" id="email-error"></span>
                  </h5>
                  <input
                    type="email"
                    aria-required="true"
                    name="logemail"
                    className="form-style"
                    id="logemail"
                    autoComplete="off"
                    value={email}
                    onChange={myEmail}
                  />
                  <i className="input-icon uil uil-at"></i>
                </div>
                <div className="form-group">
                  <h5 className="input-placeholder" id="pword-txt">
                    Password
                    <span className="error-message" id="password-error"></span>
                  </h5>
                  <input
                    type="password"
                    aria-required="true"
                    name="logpass"
                    className="form-style"
                    id="logpass"
                    autoComplete="on"
                    value={password}
                    onChange={myPassword}
                  />
                  <i className="input-icon uil uil-lock-alt"></i>
                </div>
              </div>
              <div className="password-container">
                <Link to={"/signup"}>
                  <a className="link">Create new Account</a>
                </Link>
              </div>
              <div className="btn-position" onClick={Login}>
                <a className="btn">login</a>
              </div>
            </div>
            <div className="horizontalSeparator"></div>
            <div className="qr-login">
              <div className="qr-container">
                <img
                  className="logo"
                  src="https://cdn.discordapp.com/attachments/742854174324031528/771346778356318248/ChallengerCarl_2.png"
                />
                <canvas id="qr-code"></canvas>
              </div>
              <div className="qr-pheader">Log in with QR Code</div>
              <div className="qr-sheader">
                Scan this with the <strong>scanner app </strong>to log in
                instantly.
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
