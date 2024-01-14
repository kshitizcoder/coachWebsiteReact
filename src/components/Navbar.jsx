import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross, ImSearch } from "react-icons/im";
import { BsBasket2Fill } from "react-icons/bs";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import Button from "./Button";
const NavBar = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <nav className="navbar sticky top-0 left-0 z-[99]   py-5 px-3 bg-pure ">
      <div className=" flex justify-between items-center xl:container mx-auto">
        <div className="logo">
          <img className="w-[10rem] lg:w-[15rem] " src={logo} alt="logo" />
        </div>

        <ul
          className={
            Mobile
              ? " py-7  absolute transition-all px-6 z-[-10] ease-in-out flex flex-col items-start left-0 top-[7%] w-full duration-900 bg-pure"
              : " hidden xl:flex  md:w-full md:items-center md:justify-end "
          }
          onClick={() => setMobile(false)}
        >
          <Link
            spy
            smooth
            to="hero"
            activeClass="text-secondary"
            className=" text-[1.5rem] mt-9 font-medium md:mt-3 lg:mt-0 md:mr-9 cursor-pointer	"
          >
            <li>Home</li>
          </Link>
          <Link
            to="services"
            spy
            smooth
            activeClass="text-secondary"
            className=" mt-9 text-[1.5rem] font-medium cursor-pointer	 md:mt-5  lg:mt-0 md:mr-9"
          >
            <li>Services</li>
          </Link>
          <Link
            spy
            smooth
            to="about"
            activeClass="text-secondary"
            className="mt-9 text-[1.5rem]  font-medium cursor-pointer	 md:mt-5 lg:mt-0 md:mr-9"
          >
            <li>Blog</li>
          </Link>
          <Link
            spy
            smooth
            to="extra"
            activeClass="text-secondary"
            className="mt-9 text-[1.5rem]  font-medium md:mt-5 cursor-pointer	 lg:mt-0 md:mr-9"
          >
            <li>Extra Salespage</li>
          </Link>
          <Link className="mt-9 text-[1.5rem]   font-medium md:mt-5 cursor-pointer	 lg:mt-0 md:mr-9">
            <li>
              <Button
                Style={
                  "bg-secondary text-pure py-4  text-[1.2rem]  px-5 md:px-10 rounded-[.4rem] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
                }
                Text={"Get your free guide now"}
              />
            </li>
          </Link>
        </ul>

        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? (
            <ImCross className="xl:hidden" />
          ) : (
            <FaBars className="xl:hidden" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
