import React from "react";
import ArsilLogo from "../assets/images/logo/arsil.png";
import ScrollProgress from "./ScrollProgress";
import { NAV } from "../data/nav";

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="">
      {/* Navbar utama */}
      <div className="navbar shadow-md bg-white/70 backdrop-blur border-b fixed z-50">
        {/* START */}
        <div className="navbar-start relative">
          {/* Dropdown Mobile */}
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
              {NAV.map((n) => (
                <li key={n.id}>
                  <button onClick={() => scrollTo(n.id)}>{n.label}</button>
                </li>
              ))}
            </ul>
          </div>
          {/* Logo */}
          <a href="/">
            <img src={ArsilLogo} className="h-8 ml-4" alt="Arsil Group Logo" />
          </a>
        </div>

        {/* CENTER (desktop menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal tracking-widest font-semibold px-1">
            {NAV.map((n) => (
              <li key={n.id}>
                <button onClick={() => scrollTo(n.id)}>{n.label}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* END (kosong untuk saat ini) */}
        <div className="navbar-end"></div>
      </div>

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Spacer biar konten tidak ketimpa navbar */}
      <div className="pt-16"></div>
    </div>
  );
}
