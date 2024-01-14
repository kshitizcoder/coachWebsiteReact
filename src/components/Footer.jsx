import React from "react";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="footer px-5 py-10 mt-5">
      <div className="footer-warpper container mx-auto md:grid md:grid-cols-3 justify-between">
        <div className="footer-branding xl:w-[70%] ">
          <div>
            <div>
              <img src={logo} alt="logo" />
            </div>

            <p className="text-ternary mt-5 ">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>
        </div>
        <div className="footlink mt-6 md:mt-0 ">
          <h4 className="text-primary  font-bold">Pages</h4>

          <ul className="mt-4">
            <li className="text-ternary">Home</li>
            <li className=" my-3 text-ternary">Services</li>
            <li className="text-ternary">About us</li>
            <li className="my-3 text-ternary">Extra Sales/Landingpage</li>
            <li className="text-ternary">Free guide</li>
          </ul>
        </div>

        <div className="foot-contact  mt-6 md:mt-0">
          <h4 className="text-primary  font-bold">Contact</h4>
          <ul className="mt-4">
            <li className="text-ternary">+123 456 789</li>
            <li className=" my-3 text-ternary">hello@happydigital.nl</li>
            <li className="text-ternary">Instagram</li>
            <li className="text-ternary mt-3">LinkedIn</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
