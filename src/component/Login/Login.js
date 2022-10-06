import React from "react";
import "./Login.css";
import CrossIcon from "../../images/cross1.png";
import { Link } from "react-router-dom";
import Facebook from "../../images/Facebook.png";
import Linkedin from "../../images/LInkedin.png";
import Google from "../../images/Google.png";
import { Button } from "@mui/material";

const Login = () => {
  return (
    <div className="card_style">
      <button className="btn crsBtn">
        <img className="crossIcon" src={CrossIcon} alt="" />
      </button>
      <div className="login_field">
        <h1 className="login">Log In</h1>
        <form>
          <input
            className="m-3 email-field input_field"
            type="text"
            placeholder="E-mail"
          />
          <br />
          <input
            type="password"
            className="password-field input_field"
            placeholder="password"
          />
          <Link to="/">
            <p className="m-2">forgot password?</p>
          </Link>
          <button className="btn login_btn">Log In</button>
        </form>
        <div className="d-flex justify-content-center">
          <hr className="hr-line" />
          <span className="or_part">OR</span>
          <hr className="hr-line" />
        </div>
        <div className="d-flex m-4 justify-content-center">
          <Button>
            <img className="socail_icon" src={Facebook} alt="facebook_icon" />
          </Button>
          <Button>
            <img className="socail_icon" src={Linkedin} alt="facebook_icon" />
          </Button>
          <Button>
            <img className="socail_icon" src={Google} alt="facebook_icon" />
          </Button>
        </div>
        <div className="d-flex m-4 justify-content-center">
          <form>
            <label>
              <input
                type="checkbox"
                className="checkBox"
                name="html"
                value="html"
              />{" "}
              By continuing with Google or Facebook, you <br />
              are agreeing to our{" "}
              <Link to="/terms" className="link_text">
                Terms
              </Link>
              &
              <Link to="/privacy" className="link_text">
                Conditions
              </Link>{" "}
            </label>
          </form>
        </div>
        <div className="m-4">
          <hr className="hr_line2" />
          <h6>
            Don't have an account?{" "}
            <Link to="/home" className="link_text sing_up">
              Sign Up
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Login;
