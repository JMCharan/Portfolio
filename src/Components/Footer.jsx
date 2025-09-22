
import React from 'react'
import { LiaInstagram } from "react-icons/lia";
import { RxLinkedinLogo } from "react-icons/rx";
import { PiGithubLogoFill } from "react-icons/pi";
import { PiTwitterLogoFill } from "react-icons/pi";
import { SiFacebook } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="flex flex-col md:flex-row justify-between gap-6">

        <div className="flex-1">
          <h3 className="text-xl font-bold">JM Charan</h3>
          <p className="text-sm text-gray-300 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sint ducimus adipisci, iste saepe natus ullam rem voluptas culpa veritatis.
          </p> 
        </div>
        <div className="flex-1">
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter Email" 
              className="p-2 rounded text-black flex-1"
            />
            <button className="bg-yellow-500 px-4 py-2 rounded font-semibold hover:bg-yellow-400 hover:cursor-pointer">
              Know About Me
            </button>
          </form>
        </div>
      </div>
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-600 pt-4">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} 
        </p>

        <div className="flex gap-4 text-xl">
          <a href="">
            <LiaInstagram />
        </a>
          {/* <a href="# // linked Link">
            <RxLinkedinLogo />
        </a> */}
          <a href="https://github.com/JMCharan">
            <PiGithubLogoFill />
        </a>
        <a href="//twiter link">
            <PiTwitterLogoFill />
        </a>
        <a href="//facebook link">
            <SiFacebook />
        </a>
        {/* <a href="//u-tube link">
            <FaYoutube />
        </a> */}
        </div>
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:text-yellow-400">Privacy</a>
          <a href="#" className="hover:text-yellow-400">Terms Of Services</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

