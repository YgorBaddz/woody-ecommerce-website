import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { nav } from "../data/Data";
import NavItem from "../components/NavItem";
import Icons from "../components/Icons";
import "./../customClasses.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={
        menuOpen ? "" : "w-full bg-white sticky top-0 z-10 drop-shadow-md"
      }
    >
      <div className="flex justify-between py-2 pl-5 pr-4 items-center  flex-wrap">
        <div className="sm:hidden">
          {menuOpen ? "" : <FaBars onClick={handleToggleMenu} />}
        </div>

        <div>
          <Link to="/" className="font-bold text-3xl">
            WOODY <span className="text-teal-400">COM</span>
          </Link>
        </div>

        <div
          className={`transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } sm:flex bg-white fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto transition-transform ease-in-out duration-300`}
          style={{ zIndex: "1111" }}
        >
          <FaTimes
            onClick={handleToggleMenu}
            className="absolute top-3 right-3"
          />

          <ul className="flex flex-col p-4 m-8 font-bold">
            {nav.map((list, idx) => (
              <div className="mb-3">
                <NavItem key={idx} to={list.path} label={list.text} />
              </div>
            ))}
          </ul>
        </div>

        <div className="hidden sm:flex">
          <ul className="flex uppercase font-semibold">
            {nav.map((list, idx) => (
              <div className="mb-3">
                <NavItem key={idx} to={list.path} label={list.text} />
              </div>
            ))}
          </ul>
        </div>

        <div className="top-icon">
          <Icons />
        </div>
      </div>
    </div>
  );
};

export default Header;
