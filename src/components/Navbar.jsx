import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-2 flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center">
        <h2 className="text-white text-lg font-bold mx-6">Shubhansh</h2>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/shubhansh-hardaha-297a76257/"><FaLinkedin /></a>
        <a href="https://www.instagram.com/shubhansh_03/"><FaInstagram /></a>
        <a href="https://github.com/Shubhansh03"><FaGithub /></a>
      </div>
    </nav>
  );
};

export default Navbar;
