import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="home_card card_style mt-3 d-flex justify-content-center align-items-center">
      <div className="home_card_fild">
        <p className="mb-5">Are you a client or A Recruiter?</p>
        <Link to="/client/singup" className="para_text">
          <div className="clint_box">
            <p>
              I'm a client,
              <br />
              hiring for projects
            </p>
          </div>
        </Link>

        <Link to="/worker/singup" className="para_text">
          <div className="clint_box">
            <p>
              I'm a Recruiter,
              <br />
              Looking for Work
            </p>
          </div>
        </Link>

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
  );
};

export default Home;
