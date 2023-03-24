import { useState } from "react";
import logo from "../../assets/images/nav/logo.png";

import { Link } from "react-router-dom";

export default function Navs() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);

  const menuAnimationClass = !openMenu ? "translate-y-0 opacity-0": "-translate-y-[10px] opacity-100"

  return (
    <nav className="fixed inset-x-0 top-0 z-30 bg-white">
      <div className="mx-auto flex w-screen max-w-desktop items-center justify-between p-6">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <ul className="hidden gap-5 text-sm sm:flex">
          <li className="nav-link">
            <Link to="/stories">Stories</Link>
          </li>
          <li className="nav-link">
            <Link to="/features">Features</Link>
          </li>
          <li className="nav-link">
            <Link to="/pricing">Pricing</Link>
          </li>
        </ul>
        <button className="btn-nav hidden sm:block">Get an invite</button>
        <div className="block sm:hidden">
          <button className="relative mb-4" onClick={toggleMenu}>
            <svg className={`transition-all duration-300 delay-150 ${openMenu ? "rotate-[360deg] opacity-0" : ""}`} xmlns="http://www.w3.org/2000/svg" width="20" height="6">
              <g fillRule="evenodd">
                <path d="M0 0h20v1H0zM0 5h20v1H0z" />
              </g>
            </svg>
            <svg className={`transition-all duration-500 delay-150 absolute -top-1 ${openMenu ? "scale-110 opacity-1" : "opacity-0"}`}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15">
              <path fillRule="evenodd" d="M14.718.075l.707.707L8.707 7.5l6.718 6.718-.707.707L8 8.207l-6.718 6.718-.707-.707L7.293 7.5.575.782l.707-.707L8 6.793 14.718.075z" />
            </svg>
          </button>
          <div 
            className={`absolute inset-x-0 -bottom-56 origin-top  space-y-4 bg-white p-7 text-center transition delay-100 duration-300 translate-y-0 ${menuAnimationClass}`}>
            <ul className="space-y-4">
              <li className="nav-link">
                <Link to="/stories">Stories</Link>
              </li>
              <li className="nav-link">
                <Link to="/features">Features</Link>
              </li>
              <li className="nav-link">
                <Link to="/pricing">Pricing</Link>
              </li>
            </ul>
            <hr />

            <button className="btn-nav w-full">Get an invite</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
