import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Category");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownSelect = (value) => {
    setSelectedOption(value);
    setDropdownOpen(false);
  };

  const navLinks = [
    {
        name: "Home",
        path: (
        <>
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </>
        )
    },
    {
        name: "Messages",
        path: (
        <>
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
        </>
        )
    },
    {
        name: "Notifications",
        path: (
        <>
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </>
        )
    }
  ];


  return (
    <nav className="w-full flex items-center justify-between bg-white shadow-md px-5 py-3 font-[Poppins] relative">
      {/* Logo */}
      <a href="#" className="hidden xl:flex text-2xl">
        <img src="logo-main.PNG" width="160px" alt="main-logo" />
      </a>
      <a href="#" className="flex xl:hidden sm:flex text-2xl mr-2">
        <img src="logo-icon.PNG" width="36px" alt="icon-logo" />
      </a>

      {/* Search Bar Centered */}
      <div className="flex-grow flex justify-center px-4">
        <div className="flex w-[300px] sm:w-auto relative items-center border-2 rounded-3xl border-gray-200">
          {/* Dropdown */}
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="rounded-3xl text-gray-700 ps-4 pe-2 py-1.5 flex items-center space-x-2 focus:outline-none"
          >
            <span className="text-sm">{selectedOption}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Dropdown Items */}
          {dropdownOpen && (
            <div className="text-sm absolute top-10 left-2 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
              {["Name", "Company", "Session"].map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => handleDropdownSelect(item)}
                  className="block px-4 py-2 text-gray-700 hover:bg-sky-100"
                >
                  {item}
                </a>
              ))}
            </div>
          )}

            {/* Search Input */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-[180px] lg:max-w-md rounded-3xl">
            <input
                type="text"
                placeholder="Search ..."
                className="px-4 py-2 w-full pe-12 rounded-3xl focus:outline-none text-gray-600"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
                <FaSearch className="h-4 w-4" />
            </button>
            </div>
        </div>
      </div>

      {/* Desktop Navbar Links */}
      <div className="hidden md:flex items-center space-x-2 ml-[-100px]">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="group flex items-center relative rounded-3xl hover:bg-[#e8f2f8] py-1.5 px-3 text-[#8D9295] hover:text-[#2992FE] transition"
          >
            {/* Default Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-7 group-hover:hidden"
            >
              {link.icon}
            </svg>

            {/* Hover Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#e8f2f8"
              className="size-8 hidden group-hover:block text-[#2992FE]"
            >
              {link.icon}
            </svg>

            {/* Link Name */}
            <span className="hidden lg:group-hover:inline mx-1 text-sm">{link.name}</span>
          </Link>
        ))}
      </div>



      {/* Logout Button */}
      <button className="hidden md:block bg-red-300 text-white text-sm px-4 py-2 rounded-3xl hover:bg-red-400 ml-[100px]">
        Logout
      </button>

      {/* Hamburger Menu for Mobile */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-gray-600 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Mobile Menu Items */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-20 flex flex-col items-start p-5 space-y-2 md:hidden">
          {["Home", "Messages", "Notifications"].map((name) => (
            <a key={name} href="#" className="py-2 text-sm block text-gray-700 hover:text-[#2992FE]">
              {name}
            </a>
          ))}
          <button className="bg-red-300 text-white text- px-4 py-2 rounded-3xl hover:bg-red-400">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
