import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import SocialLogin from "../SolcilalLogin/SocialLogin";

const SignUp = () => {
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      toast.success("Successfully login!");
      reset();
      navigate(from, { replace: true });
    });
  };

    return (
        <div className="login-bg hero min-h-screen mx-auto container">
      <Helmet>
        <title>Porjotok Bus Service | SignUp</title>
      </Helmet>
      <div className=" grid lg:grid-cols-2 w-auto items-center ">
        <Player
          autoplay
          loop
          src="../../../src/assets/100548-bus-carga-trackmile.json"
          className="w-auto"
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
        <div className="card flex-shrink-0 bg-gray-100 shadow-xl">
          <h1 className="text-4xl p-5 font-bold">Sign Up!</h1>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Name"
                  {...register("name")}
                  {...register("name", { required: true })}
                  className="input input-bordered "
                />
                {errors.email && (
                  <span className="text-yellow-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  {...register("email", { required: true })}
                  className="input input-bordered "
                />
                {errors.email && (
                  <span className="text-yellow-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control relative ">
                <label className="label ">
                  <span>Password</span>
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                  })}
                  className="input  input-bordered "
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute top-14 right-4 text-gray-400"
                >
                  {showConfirmPassword ? (
                    <FaEye className="w-5 h-5"></FaEye>
                  ) : (
                    <FaEyeSlash className="w-5 h-5"></FaEyeSlash>
                  )}
                </button>

                {errors.password?.type === "required" && (
                  <p className="text-yellow-500" role="alert">
                    password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-yellow-500" role="alert">
                    password must be 6 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-yellow-500" role="alert">
                    password must be at least 1 uppercase or letter case
                  </p>
                )}
              </div>

              {/* <p className="font-bold text-yellow-500 text-xl"></p> */}
              <div className="form-control mt-6">
                


              <Link
                  className="group relative inline-block overflow-hidden border-b-4 px-8 py-3 focus:outline-none focus:ring text-center"                  
                >
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-green-600 transition-all group-hover:h-full group-active:bg-green-600"></span>

                  <input
                    className="relative text-xl font-medium text-green-400 transition-colors group-hover:text-white"
                    type="submit"
                    value="Sign-Up"
                  ></input>
                </Link>


                {/* <input
                  className="btn btn-outline btn-error border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-600 via-green-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-xl"
                  type="submit"
                  value="sign-Up"
                /> */}
              </div>
              <SocialLogin></SocialLogin>
              <p className="text-center mt-5 font-semibold">
                Already have an account? Please{" "}
                <Link className="font-bold text-xl" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default SignUp;