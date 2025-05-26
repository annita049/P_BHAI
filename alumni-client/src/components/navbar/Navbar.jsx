import React from "react";
import { homeIcon,messagesIcon,logoutIcon,LogInIcon } from "../../assets/icons";
import Search from "./Search";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/useUserStore";
import { useState } from "react";
import NavLinks from './NavLinks';
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
  const { logOut,authUser } = useUserStore();
  const navigate = useNavigate();

  React.useEffect(() => {
    try {
      console.log("the connected user is : ", authUser);
      if (authUser) {
        console.log("user logged in ")
        console.log(authUser);
      }
    } catch (error) {
      console.log("no user logged in ", error)
    }
  }, [authUser]);

  const handleLogOut = async () => {
    
    const success = await logOut();
    if (success) {
      console.log("Logged out successfully");
      navigate("/login");
    } else {
      console.log("Logout failed");
      navigate("/");
    }
  };

  return (

    
    <nav className="flex gap-2 justify-between items-center px-8 pt-1 pb-2 shadow-lg">

      {/* Logo */}
      <Link to="/" className="hidden xl:flex text-2xl">
        <img src="connect-main-logo.png" width="150px" alt="maian-logo" />
      </Link>
      <Link to="/" className="flex xl:hidden sm:flex text-2xl mr-2">
        <img src="logo-mini.PNG" width="36px" alt="icon-logo" />
      </Link>

      <div className="flex-grow flex justify-center px-4">
        <Search />
      </div>


    {/* Desktop Navbar Links */} 
    <div className="hidden md:flex items-center space-x-2 ml-[-100px]">
      {authUser ? <NavLinks/> : null}
    </div>


      {/* Logout Button */}
      <button className="hidden md:block bg-red-300 text-white text-sm px-4 py-2 rounded-3xl hover:bg-red-400 ml-[100px]"
        onClick={handleLogOut}>
        Logout
      </button>

      <HamburgerMenu/>

      {/* Hamburger Menu for Mobile */}
      {/* <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-gray-600 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button> */}
    </nav>
  );
}

export default Navbar;
