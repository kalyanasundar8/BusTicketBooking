import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Signup = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 mx-10 my-7">
      <main className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">BT</h1>
        <div>
          <div className="cursor-pointer flex items-center space-x-5 border border-gray-300 rounded-full px-[70px] py-2 my-5 hover:bg-blue-100">
            <FontAwesomeIcon icon={faGoogle} />
            <h1>Sign Up with google</h1>
          </div>
          <span className="flex flex-col items-center">or</span>
          <form action="" className="flex flex-col items-center mt-5 space-y-5">
            <div>
              <input type="text" placeholder="Username" className="border border-gray-300 w-[320px] px-[10px] py-2 rounded-md outline-blue-400"/>
            </div>
            <div>
              <input type="tel" placeholder="Mobilenumber" className="border border-gray-300 w-[320px] px-[10px] py-2 rounded-md outline-blue-400"/>
            </div>
            <div>
              <input type="password" placeholder="Password" className="border border-gray-300 w-[320px] px-[10px] py-2 rounded-md outline-blue-400"/>
            </div>
            <button className="bg-blue-600 w-full py-2 rounded-md text-white font-bold">SIGN UP</button>
            <div className="flex items-center justify-between space-x-10">
              <p>I already have an account?</p>
              <Link className="text-blue-600 font-bold">Sign in</Link>
            </div>
          </form>
        </div>
        {/* <section>
          <p>I agree the terms</p>
        </section> */}
      </main>
      <main className="hidden xl:block bg-blue-600 h-[90vh] rounded-lg">
        grid2
      </main>
    </div>
  );
};

export default Signup;
