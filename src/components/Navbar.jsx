/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import logo from "../assets/Logo.svg";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 w-full">
      <nav
        className={`bg-white px-4 py-4 md:px-12 ${
          isSticky ? "sticky left-0 right-0 top-0 bg-white " : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="cursor-pointer text-lg font-bold text-white">
            <img src={logo} alt="" className="h-10" />
          </div>

          {/* for larger device */}
          <div className="text-body gap3 hidden items-center lg:flex">
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="Home"
              className=" block cursor-pointer px-4 py-2 underline hover:text-gray-400"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="Gallery"
              className="block cursor-pointer px-4 py-2 hover:text-gray-400"
            >
              Gallery
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="AboutUs"
              className="block  cursor-pointer px-4 py-2 hover:text-gray-400"
            >
              <label htmlFor="message"> About Us</label>
              <select name="message" id="message">
                <option value="1"></option>
              </select>
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="Charity"
              className="block  cursor-pointer px-4 py-2 hover:text-gray-400"
            >
              <label htmlFor="info">How we help</label>
              <select name="info" id="info">
                <option value="1"></option>
              </select>
            </Link>
          </div>

          {/* contact me btn */}
          <div className="hidden lg:block">
            <button className="border-primary text-primary hover:bg-primary rounded border bg-transparent px-4 py-2 transition-all duration-300 hover:text-white">
              Contact Me
            </button>
          </div>

          {/* btn for small devices */}
          <button onClick={toggleMenu} className="text-body text-3xl lg:hidden">
            <HiMenu />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 rounded-lg bg-white p-4 text-black hover:cursor-pointer">
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="Home"
              className="block py-2 hover:text-gray-400"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="Gallery"
              className="block py-2 hover:text-gray-400"
            >
              Gallery
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="AboutUs"
              className="block py-2 hover:text-gray-400"
            >
              About Us
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="Charity"
              className="block py-2 hover:text-gray-400"
            >
              How we Help
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
