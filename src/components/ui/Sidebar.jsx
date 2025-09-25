import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import defaultProfile from "../../assets/images/defaultProfile.jpg";
import ArsilLogo from "../../assets/images/logo/arsil.png";
// import { getUserRole } from "../utils/auth";

function Sidebar({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-slate-100 w-full shadow-lg">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 font-chewy lg:text-4xl text-2xl text-slate-800">
            <img src={ArsilLogo} className="h-8 ml-4" alt="Arsil Group Logo" />
          </div>
          <div className="flex-none mr-1 lg:mr-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar avatar-online"
              >
                <div className="w-10 rounded-full">
                  <img alt="Default Profil" src={defaultProfile} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="h-full w-2/12 hidden lg:block">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-slate-100 ">
              <ul className="space-y-2 font-bold">
                {/* Testimonial */}
                <li>
                  <Link
                    to="/admin"
                    className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-800 hover:text-slate-100  duration-200 ${
                      isActive("/admin") ? "bg-blue-800 text-slate-100" : ""
                    }`}
                  >
                    <svg
                      className="shrink-0 w-7 h-7  transition duration-75"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap text-lg ">
                      Proyek
                    </span>
                  </Link>
                </li>

                {/* Testimonial */}
                <li>
                  <Link
                    to="/admin/testimonial"
                    className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-800 hover:text-slate-100 duration-200 ${
                      isActive("/admin/testimonial")
                        ? "bg-blue-800 text-slate-100"
                        : ""
                    }`}
                  >
                    <svg
                      className="shrink-0 w-7 h-7  transition duration-75  group-hover:text-gray-900 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-3 8a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H9Zm2 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H9Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="flex-1 ms-3 whitespace-nowrap text-lg ">
                      Testimonial
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Dynamic Content */}
          <div className="h-full w-full lg:w-10/12 p-4 bg-white">
            {children}
          </div>
        </div>
      </div>

      {/* Drawer Mobile */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-slate-100 min-h-full w-80 p-4 font-semibold text-white">
          {/* PROJECTS */}
          <li>
            <Link
              to="/admin"
              className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-800 hover:text-slate-100 duration-200 ${
                isActive("/dashboard") ? "bg-[#90a17d]" : ""
              }`}
            >
              <svg
                className="w-7 h-7 text-slate-700 transition duration-75  group-hover:text-gray-900 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3 text-lg text-slate-700">Proyek</span>
            </Link>
          </li>

          {/* TESTIMONIAL */}
          <li>
            <Link
              to="/admin/testimonial"
              className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-800 hover:text-slate-100 duration-200 ${
                isActive("/income") ? "bg-[#90a17d]" : ""
              }`}
            >
              <svg
                className="shrink-0 w-7 h-7 text-slate-700 transition duration-75  group-hover:text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 19v2c0 .5523.44772 1 1 1h14c.5523 0 1-.4477 1-1v-2H4Z"
                />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M9 3c0-.55228.44772-1 1-1h8c.5523 0 1 .44772 1 1v3c0 .55228-.4477 1-1 1h-2v1h2c.5096 0 .9376.38314.9939.88957L19.8951 17H4.10498l.90116-8.11043C5.06241 8.38314 5.49047 8 6.00002 8H12V7h-2c-.55228 0-1-.44772-1-1V3Zm1.01 8H8.00002v2.01H10.01V11Zm.99 0h2.01v2.01H11V11Zm5.01 0H14v2.01h2.01V11Zm-8.00998 3H10.01v2.01H8.00002V14ZM13.01 14H11v2.01h2.01V14Zm.99 0h2.01v2.01H14V14ZM11 4h6v1h-6V4Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap text-lg text-slate-700">
                Testimonial
              </span>
            </Link>
          </li>

          {/* <li>
            <button onClick={handleLogout}>Logout</button>
          </li> */}
          {/* Tambah menu mobile */}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
