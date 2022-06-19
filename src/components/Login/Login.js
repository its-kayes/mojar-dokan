import React from "react";
import { Link } from "react-router-dom";
import Social from "./Social";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?
              <Link to="/register">
                {" "}
                <span className="text-blue-700 hover:underline dark:text-blue-500">
                  Create account
                </span>{" "}
              </Link>
            </div>
            <hr />
            <Social></Social>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
