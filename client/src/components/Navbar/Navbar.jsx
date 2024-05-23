import React from "react"
import { HiOutlineHome, HiSearch, HiUser } from "react-icons/hi"
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-gray-800 sm:px-6">
      <div className="flex items-center">
        <span className="text-white mr-2 text-xl" title="logo">Logo</span>
        <span className="text-white">
          <HiOutlineHome className="h-6 w-6" title="Home" />
        </span>
      </div>
      <div className="flex items-center">
        <span className="text-white mr-2">
          <HiSearch className="h-6 w-6" title="search" />
        </span>
        <span className="text-white mr-2">
          <HiUser className="h-6 w-6" title="user"/>
        </span>
        <span className="text-white mr-2">
          <BiLogInCircle className="h-6 w-6" title="login"/>
        </span>
        <span className="text-white">
          <BiLogOutCircle className="h-6 w-6" title="logout"/>
        </span>
      </div>
    </nav>
  )
}

export default Navbar