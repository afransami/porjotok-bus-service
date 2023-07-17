import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import SocialLogin from "../SolcilalLogin/SocialLogin";
import { toast } from "react-hot-toast";
import { saveUser } from "../API/Auth";

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

  const [error, setError] = useState(" ");
  const { createUser, loading, setLoading, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    createUser(data.email, data.password)
    .then(result => {
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          toast.success('Signup successful')
          saveUser(result.user)
          reset()
          navigate(from, { replace: true })
        })
        .catch(error => {
          setLoading(false)
          console.log(error.message)
          toast.error(error.message)
        })
    })
    .catch(error => {
      setLoading(false)
      console.log(error.message)
      toast.error(error.message)
    })



    // createUser(data.email, data.password).then((result) => {
    //   const user = result.user;
    //   console.log(user);
    //   toast.success("Successfully SignUp!");
    //   saveUser(result.user);
    //   updateUserProfile(data.name, data.photoURL)
    //   setError("");
    // })

    // updateUserProfile(data.name, data.photoURL)
    //   .then(() => {
    //     const saveUser = {
    //       name: data.name,
    //       email: data.email,
    //       photoURL: data.photoURL,
    //     };

    //     fetch(`http://localhost:5000/users/${user?.email}`, {
    //       method: "PUT",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(saveUser),
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         if (data.insertedId) {
    //           reset();              
    //           navigate(from, { replace: true });
    //         }
    //       })
    //   })
    .catch((error) => console.error(error.message));
    setError(error.message);
    navigate(from, { replace: true });
  };



  // const onSubmit = (data) => {
  //   createUser(data.email, data.password).then((result) => {
  //     const loggedUser = result.user;
  //     toast.success("Successfully SignUp!");
  //     console.log(loggedUser);
  //     setError("");

  //     updateUserProfile(data.name, data.photoURL)
  //       .then(() => {
  //         const saveUser = { name: data.name, email: data.email, photoURL: data.photoURL, };
  //         fetch("http://localhost:5000/users", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(saveUser),
  //         })
  //           .then((res) => res.json())
  //           .then((data) => {
  //             if (data.insertedId) {                
  //               reset();                
  //               navigate(from, { replace: true });
  //             }
  //           });
  //       })
  //       .catch((error) => console.error(error.message));
  //     setError(error.message);
  //     navigate(from, { replace: true });
  //   });
  // };
  
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name")}
                  {...register("name", { required: true })}
                  className="input input-bordered "
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="url"
                  placeholder="Photo url"
                  {...register("photoURL", { required: true })}
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span>Password</span>
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /[A-Za-z]+/i,
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
                  <p className="text-red-500" role="alert">
                    password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500" role="alert">
                    password must be 6 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500" role="alert">
                    password must be at least 1 uppercase or letter case
                  </p>
                )}
              </div>

              <div className="form-control mt-6">
                <button className="group relative inline-block overflow-hidden border-b-4 px-8 py-3 focus:outline-none focus:ring text-center">
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-green-600 transition-all group-hover:h-full group-active:bg-green-600"></span>

                  <input
                    className="relative text-xl font-medium text-green-400 transition-colors group-hover:text-white"
                    type="submit"
                    value="Sign-Up"
                  ></input>
                </button>
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
