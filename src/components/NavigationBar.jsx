import React from "react";
import ArsilLogo from "../assets/images/logo/arsil.png";
import { Link } from "react-router-dom";
import ScrollProgress from "./ScrollProgress";

function NavigationBar() {
  return (
    <div className="">
      <div className="navbar shadow-xl bg-gray-200 fixed z-50">
        <div className="navbar-start relative">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm tracking-wide font-semibold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Beranda</Link>
              </li>
              <li>
                <a>Portofolio</a>
                <ul className="p-2">
                  <li>
                    <Link to="interior">Interior</Link>
                  </li>
                  <li>
                    <Link to="eksterior">Eksterior</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="tentang">Tentang</Link>
              </li>
              <li>
                <Link to="kontak">Kontak Kami</Link>
              </li>
            </ul>
          </div>
          <a href="/">
            <img src={ArsilLogo} className="h-8 ml-4" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal tracking-widest font-semibold px-1">
            <li>
              <Link to="/">Beranda</Link>
            </li>
            <li>
              <details>
                <summary>Portofolio</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/interior">Interior</Link>
                  </li>
                  <li>
                    <Link to="eksterior">Eksterior</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="tentang">Tentang</Link>
            </li>
            <li>
              <Link to="kontak">Kontak Kami</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
      <ScrollProgress />
      <div className="pt-16"></div>
    </div>
  );
}

export default NavigationBar;
