import React from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

// NavBarItem Component for individual menu items
const NavBarItem = ({ title, classprops, scrollTo, to }) => (
  <li
    className={`mx-4 cursor-pointer ${classprops}`}
    onClick={scrollTo}
  >
    {to ? (
      <Link to={to} className="px-4 py-2 hover:underline">{title}</Link>
    ) : (
      title
    )}
  </li>
);

// Main Navbar Component
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  // Function to handle scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="w-full flex bg-black text-white md:justify-center justify-between items-center p-4 fixed top-0 left-0 right-0 z-50">
      {/* Desktop Navbar */}
      <ul className="md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {/* Static Links */}
        <NavBarItem title="Home" to="/" />
        <NavBarItem title="Donate" to="/ethereum-donation" />
        <NavBarItem title="NGOs" to="/ngos" />
        <NavBarItem title="My Transactions" to="/transactions" />
        <NavBarItem title="Success Stories" to = "/successStories"/>
      
      </ul>

      {/* Mobile Navbar */}
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed top-0 right-0 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {/* Mobile Links */}
            <NavBarItem title="Home" to="/" classprops="my-2 text-lg" />
            <NavBarItem title="Donate" to="/ethereum-donation" classprops="my-2 text-lg" />
            <NavBarItem title="NGOs" to="/ngos" classprops="my-2 text-lg" />
            <NavBarItem title="My Transactions" to="/transactions" classprops="my-2 text-lg"/>
            <NavBarItem title="Success Stories" to = "/success-stories" classprops="my-2 text-lg"/>

            {/* Mobile Scroll Links */}
            {[
              { title: "Donate", sectionId: "welcome" },
      
              { title: "Success Stories", sectionId: "success-stories" },
            ].map(({ title, sectionId }, index) => (
              <NavBarItem
                key={title + index}
                title={title}
                classprops="my-2 text-lg"
                scrollTo={() => scrollToSection(sectionId)}
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

