import React from "react";

import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial items-center flex flex-row gap-2">
        <a href="https://oxlac.com" target="_blank">
          <img src={logo} alt="logo" className="w-10 cursor-pointer" />
        </a>
        <h1 className="text-white font-bold text-xl">dePay</h1>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Features", "Transactions", "Document"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="bg-[#13141a] py-3 px-6 mx-4 rounded-full cursor-pointer hover:bg-[#20212b] flex flex-row items-center">
          <AiFillGithub className="mr-2" size={20} />
          Contribute
        </li>
      </ul>

      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[50vw] h-[30vh] shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-xl blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Features", "Transactions", "Document"].map((item, index) => (
              <NavBarItem
                key={item + index}
                title={item}
                classprops="my-2 text-lg"
              />
            ))}
            <li className="bg-[#13141a] py-3 px-6 mx-4 mt-2 rounded-full cursor-pointer hover:bg-[#20212b] flex flex-row items-center">
              <AiFillGithub className="mr-2" size={20} />
              Contribute
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
