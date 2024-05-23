import React, { useState } from "react";
import { HiOutlineHome, HiSearch, HiUser } from "react-icons/hi";
import { BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showSearchInput, setShowSearchInput] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchIconClick = () => {
        setShowSearchInput(!showSearchInput);
    };

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Implement search functionality here, e.g., fetch blogs based on searchQuery
        console.log("Searching for:", searchQuery);
    };
    return (
        <nav className='fixed top-0 w-full flex items-center justify-between px-4 py-3 bg-gray-800 sm:px-6'>
            <div className='flex items-center'>
                <span
                    className='text-white mr-2 text-xl cursor-pointer'
                    title='logo'>
                    <Link to='/'>Blog App</Link>
                </span>
                <span className='text-white cursor-pointer hover:text-gray-400 hover:scale-110 transition transform duration-200'>
                    <Link to='/'>
                        <HiOutlineHome className='h-6 w-6 ' title='Home' />
                    </Link>
                </span>
            </div>
            <div className='flex items-center'>
                {showSearchInput && (
                    <form onSubmit={handleSearchSubmit} className='mr-2'>
                        <input
                            type='text'
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                            className='px-0.5 py-0.5 pt-0.5 rounded'
                            placeholder='Search blogs...'
                        />
                    </form>
                )}
                <span
                    className='text-white mr-2 cursor-pointer hover:text-gray-400 hover:scale-150 transition transform duration-200'
                    onClick={handleSearchIconClick}>
                    <HiSearch className='h-6 w-6' title='search' />
                </span>
                <span className='text-white mr-2 cursor-pointer hover:text-gray-400 hover:scale-150 transition transform duration-200'>
                    <Link to='/user-profile'>
                        <HiUser className='h-6 w-6' title='user' />
                    </Link>
                </span>
                <span className='text-white mr-2 cursor-pointer hover:text-gray-400 hover:scale-150 transition transform duration-200'>
                    <Link to='/login'>
                        <BiLogInCircle className='h-6 w-6' title='login' />
                    </Link>
                </span>
            </div>
        </nav>
    );
};

export default Navbar;
