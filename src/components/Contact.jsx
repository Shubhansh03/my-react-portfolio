import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 text-center justify-center">
      <Link to="/contact">
        <button className="bg-purple-900 hover:bg-neutral-900 opacity-75 hover:text-purple-700 text-white font-extrabold py-2 px-4 border border-transparent rounded-3xl my-4 w-48 h-16 shadow-2xl text-lg">
          CONTACT ME
        </button>
      </Link>
      <div className="text-center tracking-tighter justify-center">
        <p className="my-4 text-neutral-300">
          Tap To Connect
        </p>
        
      </div>
    </div>
  );
};

export default Contact;
