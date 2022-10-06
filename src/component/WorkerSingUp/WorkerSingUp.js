import React from "react";
import "./WorkerSingUp.css";
import { Link } from "react-router-dom";

const WorkerSingUp = () => {
  return (
    <div className="singup_worker_card card_style mt-3 d-flex justify-content-center align-items-center">
      <div className="card-value">
        <div className="value_submit_from">
          <h1 className="login pb-4">Join NetOne</h1>
          <form>
            <input
              className="m-3 email-field input_field"
              type="text"
              placeholder="First Name"
            />
            <br />
            <input
              className="m-3 email-field input_field"
              type="text"
              placeholder="Last Name"
            />
            <br />
            <input
              className="m-3 email-field input_field"
              type="email"
              placeholder="E-mail"
            />
            <input
              className="m-3 email-field input_field"
              type="email"
              placeholder="Confirm E-mail"
            />
            <br />
            <input
              className="m-3 email-field input_field"
              type="password"
              placeholder="Password"
            />
            <br />

            <label classNeme="input_field">
              <input
                type="checkbox"
                className="checkBox"
                name="html"
                value="html"
              />
              <span>
                {"  "}Yes, I understand and agree to the NetOne Recruiter{" "}
              </span>
              <br />
              <Link to="/terms" className="link_text p-1">
                Terms of Service
              </Link>
              and
              <Link to="/privacy" className="link_text p-1">
                Privacy Policy
              </Link>
            </label>
            <br />
            <br />
            <button className="btn login_btn">Continue</button>
          </form>

          <div className="m-4">
            <hr className="hr_line2" />
            <h6>
              Have an account?{" "}
              <Link to="/login" className="link_text sing_up">
                Log In
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerSingUp;
