/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavComponent = ({ loading, li }) => {
  const [menuMobile, setMenuMobile] = useState(false);

  const navItems = () => {
    //   loading if li processing
    if (loading) {
      return <div>Loading...</div>;
    }
    return li.map((item, index) => {
      return (
        <li key={index}>
          <Link to={`${item.id}`} onClick={handleMenu}>
            {item.subject_nm}
          </Link>
        </li>
      );
    });
  };

  const handleMenu = () => {
    setMenuMobile(!menuMobile);
  };

  return (
    <div>
      <div className="fixed top-0 z-50 hidden md:navbar md:bg-base-100 md:shadow-lg md:mb-3 md:flex md:justify-center">
        <div className="">
          <ul className="menu menu-horizontal p-0">
            {navItems()}
            {/* <li>
            <Link to="#">Item 1</Link>
          </li>
          <li>
            <Link to="#">Item 3</Link>
          </li> */}
          </ul>
        </div>
      </div>
      <div className="md:hidden">
        <div className="flex justify-end">
          <button
            className="btn btn-square btn-ghost order-last fixed top-0 z-50"
            onClick={handleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <ul
            className={
              menuMobile
                ? "menu bg-base-100 shadow-lg w-full border rounded-box my-0 fixed top-0 left-0 z-40"
                : "hidden"
            }
          >
            {navItems()}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavComponent;
