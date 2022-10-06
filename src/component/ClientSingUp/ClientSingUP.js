import React from "react";
import { Link } from "react-router-dom";
import "./ClientSingUp.css";
const ClientSingUP = () => {
  return (
    <div className="singup_card card_style mt-3 d-flex justify-content-center align-items-center">
      <div className="card-value">
        <div className="value_submit_from">
          <h1 className="login">Join NetOne</h1>
          <form>
            <input
              className="m-3 email-field input_field"
              type="text"
              placeholder="E-mail*"
            />
            <br />
            <input
              className="m-3 email-field input_field"
              type="text"
              placeholder="Full Name*"
            />
            <br />
            <input
              className="m-3 email-field input_field"
              type="text"
              placeholder="Company Name*"
            />
            <br />
            <br />
            <button className="btn login_btn">Continue</button>
          </form>

          <div className="d-flex m-4 justify-content-center">
            <form>
              <label>
                <input
                  type="checkbox"
                  className="checkBox"
                  name="html"
                  value="html"
                />
                <span>
                  {" "}
                  Yes, I understand and agree to the NetOne Recruiter{" "}
                </span>
                <Link to="/terms" className="link_text p-1">
                  Terms of Service
                </Link>
                and
                <Link to="/privacy" className="link_text p-1">
                  Privacy Policy
                </Link>{" "}
              </label>
            </form>
          </div>
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

export default ClientSingUP;
