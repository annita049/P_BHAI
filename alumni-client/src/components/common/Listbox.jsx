import { useState } from "react";
// import { profileIcon, ChevronDownIcon, companyIcon } from "../../assets/icons";

export default function ListBox() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Category");

  const handleDropdownSelect = (value) => {
    setSelectedOption(value);
    setDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Toggle Button */}

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
        <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white">
          {["User", "Company", "Session"].map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => handleDropdownSelect(item)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-100"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
