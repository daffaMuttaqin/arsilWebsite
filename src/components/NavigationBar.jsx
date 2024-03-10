import React from "react";
import ArsilLogo from "../assets/images/logo/arsil.png";

function NavigationBar() {
  return (
    <div className="px-1 ">
      <div className="navbar shadow-xl bg-gray-200 rounded-xl">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Beranda</a>
              </li>
              <li>
                <a>Proyek</a>
                <ul className="p-2">
                  <li>
                    <a>Interior</a>
                  </li>
                  <li>
                    <a>Eksterior</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Tentang</a>
              </li>
              <li>
                <a>Kontak Kami</a>
              </li>
            </ul>
          </div>
          <a href="/">
            <img src={ArsilLogo} className="h-16 ml-4" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Beranda</a>
            </li>
            <li>
              <details>
                <summary>Proyek</summary>
                <ul className="p-2">
                  <li>
                    <a>Interior</a>
                  </li>
                  <li>
                    <a>Eksterior</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Tentang</a>
            </li>
            <li>
              <a>Kontak Kami</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </div>
  );
}

export default NavigationBar;
