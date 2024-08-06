import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Signup = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 mx-10 my-7">
      <main className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">BT</h1>
        <div>
          <div className="flex items-center space-x-5 border border-gray-300 rounded-full px-[70px] py-2 my-5">
            <FontAwesomeIcon icon={faGoogle} />
            <h1>Sign Up with google</h1>
          </div>
          <span className="flex flex-col items-center">or</span>
          <form action="">
            <div>
              <input type="text" />
            </div>
            <div>
              <input type="tel" />
            </div>
            <div>
              <input type="password" />
            </div>
            <button>Continue</button>
          </form>
        </div>
      </main>
      <main className="hidden xl:block bg-blue-600 h-[90vh] rounded-lg">
        grid2
      </main>
    </div>
  );
};

export default Signup;
