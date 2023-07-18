import React, { useContext, useState } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import SocialLogin from "../SolcilalLogin/SocialLogin";
import { toast } from "react-hot-toast";
import loginAnim from "../../../public/100548-bus-carga-trackmile.json"

const Login = () => {
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
        <title>Porjotok Bus Service | Login</title>
      </Helmet>
      <div className=" grid lg:grid-cols-2 w-auto items-center ">
        <Player
          autoplay
          loop
          src={loginAnim}          
          className="w-auto"
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
        <div className="card flex-shrink-0 bg-gray-100 shadow-xl">          
          <h1 className="text-4xl p-5 font-bold">Login!</h1>
          <Form onSubmit={handleSubmit(handleLogin)}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
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
                  placeholder="password"
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

              <div className="form-control mt-6">
                <button className="group relative inline-block overflow-hidden border-b-4 px-8 py-2 text-center">
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-green-600 transition-all group-hover:h-full group-active:bg-green-600"></span>

                  <input
                    className="relative text-xl font-medium text-green-400 transition-colors group-hover:text-white"
                    type="submit"
                    value="Login"
                  ></input>
                </button>
              </div>
              <SocialLogin></SocialLogin>
              <p className="text-center mt-5 font-semibold">
                New to Porjotok Bus Service? Please{" "}
                <Link className="font-bold  text-xl" to="/singUp">
                  Sign-Up
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
