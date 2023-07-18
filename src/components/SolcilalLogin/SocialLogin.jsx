import React from "react";
import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { saveUser } from "../API/Auth";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      saveUser(result.user);
      toast.success("Successfully login!");
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <div className="divider ">Social Media Login</div>
      <div className="text-center flex justify-center gap-8">
        <Link
          onClick={handleGoogleLogin}
          className="group relative inline-block overflow-hidden border-b-4 px-8 py-2"
          to="/bus-reservation"
        >
          <span className="absolute inset-x-0 bottom-0 h-[2px] bg-green-600 transition-all group-hover:h-full group-active:bg-green-600"></span>

          <span className="relative hover:scale-110 text-3xl font-medium text-green-400 transition-colors group-hover:text-white">
            <FaGoogle></FaGoogle>
          </span>
        </Link>

        {/* <button  onClick={handleGoogleLogin} className="btn btn-outline btn-error border-0 border-b-4 mt-4  bg-gradient-to-r from-neutral-500 via-green-600 to-neutral-600 rounded shadow-xl bg-opacity-30 hover:scale-110 text-3xl">
          <FaGoogle></FaGoogle>
        </button> */}

        <Link
          onClick={handleGoogleLogin}
          className="group relative inline-block overflow-hidden border-b-4 px-8 py-2"
          to="/bus-reservation"
        >
          <span className="absolute inset-x-0 bottom-0 h-[2px] bg-green-600 transition-all group-hover:h-full group-active:bg-green-600"></span>

          <span className="relative hover:scale-110 text-3xl font-medium text-green-400 transition-colors group-hover:text-white">
            <FaFacebook></FaFacebook>
          </span>
        </Link>

        {/* <button className="btn btn-outline btn-error border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-green-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-3xl hover:scale-110">
          <FaFacebook></FaFacebook>
        </button> */}

        <Link
          onClick={handleGoogleLogin}
          className="group relative inline-block overflow-hidden border-b-4 px-8 py-2"
          to="/bus-reservation"
        >
          <span className="absolute inset-x-0 bottom-0 h-[2px] bg-green-600 transition-all group-hover:h-full group-active:bg-green-600"></span>

          <span className="relative hover:scale-110 text-3xl font-medium text-green-400 transition-colors group-hover:text-white">
          <FaGithub></FaGithub>
          </span>
        </Link>

        {/* <button className="btn btn-outline btn-error border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-green-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-3xl hover:scale-110">
          <FaGithub></FaGithub>
        </button> */}
      </div>
    </div>
  );
};

export default SocialLogin;
