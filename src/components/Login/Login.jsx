import React, { useState } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
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
      toast.success('Successfully login!')
      reset();
      navigate(from, { replace: true });
    });
  };

  return (
<div className="login-bg hero min-h-screen  ">
      <Helmet>
        <title>Porjotok Bus Service | Login</title>
      </Helmet>
      <div className=" grid lg:grid-cols-2 w-auto items-center ">
        <Player
          autoplay
          loop
          src="../../../src/assets/38435-register.json"
          className="w-auto"
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
        <div className="card flex-shrink-0 bg-gradient-to-r from-neutral-600 via-cyan-600 to-neutral-600 shadow-xl bg-opacity-30">
          <h1 className="text-4xl p-5 font-bold">Login!</h1>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email")}
                  {...register("email", { required: true })}
                  className="input input-bordered text-black"
                />
                {errors.email && (
                  <span className="text-yellow-500">This field is required</span>
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
                  className="input  input-bordered text-black"
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
                <input
                  className="btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-600 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-xl hover:scale-110"
                  type="submit"
                  value="Login"
                />
              </div>
              <SocialLogin></SocialLogin>
              <p className="text-center mt-5 font-semibold">
                New to Musical Mingle? Please{" "}
                <Link className="font-bold text-yellow-500" to="/register">
                  signUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>

    // <div className="grid lg:grid-cols-2">
    //   <div className="w-full">
    //     <Player
    //       autoplay
    //       loop
    //       src="../../../src/assets/38435-register.json"
    //       className="w-auto"
    //     >
    //       <Controls
    //         visible={false}
    //         buttons={["play", "repeat", "frame", "debug"]}
    //       />
    //     </Player>
    //   </div>

    //   <div className="w-full flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    //     <div className="w-full sm:mx-auto sm:w-full sm:max-w-sm">
    //       <img
    //         className="mx-auto h-10 w-auto"
    //         src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
    //         alt="Your Company"
    //       />
    //       <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
    //         Sign in to your account
    //       </h2>
    //     </div>

    //     <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    //       <form className="space-y-6" action="#" method="POST">
    //         <div>
    //           <label
    //             htmlFor="email"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             Email address
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               id="email"
    //               name="email"
    //               type="email"
    //               autoComplete="email"
    //               required
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>

    //         <div>
    //           <div className="flex items-center justify-between">
    //             <label
    //               htmlFor="password"
    //               className="block text-sm font-medium leading-6 text-gray-900"
    //             >
    //               Password
    //             </label>
    //             <div className="text-sm">
    //               <a
    //                 href="#"
    //                 className="font-semibold text-indigo-600 hover:text-indigo-500"
    //               >
    //                 Forgot password?
    //               </a>
    //             </div>
    //           </div>
    //           <div className="mt-2">
    //             <input
    //               id="password"
    //               name="password"
    //               type="password"
    //               autoComplete="current-password"
    //               required
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>

    //         <div>
    //           <button
    //             type="submit"
    //             className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //           >
    //             Sign in
    //           </button>
    //         </div>
    //       </form>

    //       <p className="mt-10 text-center text-sm text-gray-500">
    //         Not a member?{" "}
    //         <a
    //           href="#"
    //           className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
    //         >
    //           Start a 14 day free trial
    //         </a>
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Login;
