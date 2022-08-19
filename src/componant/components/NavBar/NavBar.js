import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import "./NavBar.css";

const NavBar = () => {
  //navbar when scroll

  const [navSize, setnavSize] = useState("unset");
  const [marginTopNav, setmarginTopNav] = useState("");
  const [boxshadow, setBoxshadow] = useState("");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setmarginTopNav("-8%") : setmarginTopNav("8%");
    window.scrollY > 10 ? setnavSize("2px 0px 20px #000") : setnavSize("unset");
    window.scrollY > 10
      ? setBoxshadow(
          "0 0.5rem 1rem rgb(0 0 0 / 15%), inset 0 -1px 0 rgb(0 0 0 / 15%)"
        )
      : setBoxshadow("unset");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      {/* frist nav */}

      <nav
        style={{ boxShadow: boxshadow }}
        className="pt frist_nav flex justify-around py-8 mx-auto bg-white"
      >
        <div className="flex items-center">
          <h3 className="font-bold text-2xl  text-black-500">
            <a href="/">Booksy</a>
          </h3>
        </div>
        {/* <!-- left nav section --> */}
        <div className="items-center hidden space-x-8 lg:flex">
          <div className="searchBar">
            <input
              className="font-bold searchQueryInput"
              type="text"
              name="searchQueryInput"
              placeholder="Search by author, title, name"
            />
            <button
              className=" searchQuerySubmit"
              type="submit"
              name="searchQuerySubmit"
            >
              <FiSearch />
            </button>
          </div>
        </div>
        {/* <!-- right nav section --> */}
        <div className="right_nav  flex items-center space-x-2">
          <FiHeart />
          <a className="smGlobalBtn font-bold" href="#">
            0
          </a>
          <h3 className="font-bold text-slate-400">EN</h3>
        </div>
      </nav>

      {/* sec nav */}

      <nav
        style={{
          marginTop: marginTopNav,
          boxShadow: navSize,
        }}
        className=" sec_nav flex justify-around py-0 mx-auto bg-white"
      >
        {/* <!-- left header section --> */}
        <div className="gap_sec_nav font-bold items-center hidden  lg:flex">
          <a className="nav_links text-slate-400" href="#">
            Home
          </a>
          <a className="nav_links text-slate-400" href="#">
            Bestseller
          </a>
          <div className="dropdown inline-block relative">
            <button className="text-slate-400 inline-flex items-center">
              <span className=" nav_links ">Dropdown</span>
              <svg
                className="fill-current h-4 w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </button>
            <ul className="dropdown-menu absolute hidden text-gray-700 ">
              <li className="">
                <a
                  className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  One
                </a>
              </li>
              <li className="">
                <a
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Two
                </a>
              </li>
              <li className="">
                <a
                  className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Three
                </a>
              </li>
            </ul>
          </div>
          <a className="nav_links text-slate-400" href="#">
            Find a store
          </a>
          <a className="nav_links text-slate-400" href="#">
            Blog
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
