import React from "react";
import { NavLink } from "react-router-dom";
import { BiCube,BiLogoReact,BiMapAlt,BiBell,BiUser,BiTable,BiText } from "react-icons/bi";

function Sidebar() {
  const navClass = " px-2 flex items-center py-3 rounded-full ";

  return (
    <div className="w-20 lg:w-72 px-5 bg-[#f76333]  fixed h-screen text-white text-xs font-extralight">
      <div className="flex py-5 items-center border-b text-sm">
        <h4 className="px-2">Ct</h4>
        <h3 className="px-4">CREATIVE TIM</h3>
      </div>
      <div className="mt-5 space-y-3">
        <NavLink
          to="/"
          className={navClass + ((isActive) => (isActive ? "active" : ""))}
        >
          <BiCube size={25} />
          <p className="px-4">DASHBOARD</p>
        </NavLink>

        <NavLink
          to="/icons"
          className={navClass + ((isActive) => (isActive ? "active" : ""))}
        >
          <BiLogoReact size={25} />
          <p className="px-4">ICONS</p>
        </NavLink>

        <NavLink
          to="/maps"
          className={navClass + ((isActive) => (isActive ? "active" : ""))}
        >
          <BiMapAlt size={25} />
          <p className="px-4">MAPS</p>
        </NavLink>

        <NavLink
          to="/notifications"
          className={navClass + ((isActive) => (isActive ? "active" : ""))}
        >
          <BiBell size={25} />
          <p className="px-4">NOTIFICATIONS</p>
        </NavLink>

        <NavLink
          to="/user"
          className={navClass + ((isActive) => (isActive ? "active" : ""))}
        >
          <BiUser size={25} />
          <p className="px-4">USER PROFILE</p>
        </NavLink>

        <NavLink
          to="/table"
          className={navClass + ((isActive) => (isActive ? "active" : ""))}
        >
          <BiTable size={25} />
          <p className="px-4">TABLE LIST</p>
        </NavLink>

        <NavLink
          to="/typo"
          className={navClass + ((isActive) => (isActive ? "active" : ""))}
        >
          <BiText size={25} />
          <p className="px-4">TYPOGRAPHY</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
