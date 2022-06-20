import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import React from "react";
import { Link } from "react-router-dom";
import Social from "../Login/Social";
import auth from "../../firebase.init";
import { async } from "@firebase/util";
// let auth from '../../firebase.init.js/";

let userImg = (
  <img
    src="https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png"
    alt=""
  />
);

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  if (user) {
    console.log(user);
  }

  // if (user) {
  //   return (
  //     <div>
  //       <p>Registered User: {user.email}</p>
  //     </div>
  //   );
  // }

  let userRegister = async (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let email = event.target.email.value;
    let pass = event.target.password.value;
    let photoURL = userImg;

    let userDetails = {
      name: name,
      email: email,
      password: pass,
      img: userImg,
    };
    await createUserWithEmailAndPassword(email, pass);
    await updateProfile({ displayName: name, photoURL: userImg });
    // await updateProfile({ displayName: name });
    // createUserWithEmailAndPassword(user)
    console.log(userDetails);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Register now!</h1>
          <p class="py-6">Provident cupiditate voluptatem et in.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={userRegister} className="card-body">
            <h5 className="text-2xl text-center font-medium text-gray-900 dark:text-white">
              Sign Up
            </h5>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <div className="flex items-start mt-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Remember me!{" "}
                  </label>
                </div>
              </div>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
              Not registered?
              <Link to="/login">
                {" "}
                <span className="text-blue-700 hover:underline dark:text-blue-500">
                  Please Login
                </span>{" "}
              </Link>
            </div>
          </form>
          <div>
            <hr />
            <Social></Social>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
