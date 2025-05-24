import React from "react";
import { homeIcon,messagesIcon,logoutIcon,LogInIcon } from "../../assets/icons";
import Search from "./Search";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/useUserStore";
import { useState } from "react";
import NavLinks from './NavLinks';

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

  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // const navLinks = [
  //   {
  //       name: "Home",
  //       path: (
  //       <>
  //           <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  //       </>
  //       )
  //   },
  //   {
  //       name: "Messages",
  //       path: (
  //       <>
  //           <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
  //       </>
  //       )
  //   },
  //   {
  //       name: "Notifications",
  //       path: (
  //       <>
  //           <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
  //       </>
  //       )
  //   }
  // ];
  
  return (

    // numbing spray

    <div className="flex gap-2 justify-between items-center px-8 pt-4">
      <div>
        <Link to="/">{homeIcon}</Link>
      </div>
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


      {/* Hamburger Menu for Mobile */}
      {/* <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-gray-600 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button> */}
    </div>
  );
}

export default Navbar;
