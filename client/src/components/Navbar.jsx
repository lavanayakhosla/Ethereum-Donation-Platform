import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const NavBarItem = ({ title, classprops, scrollTo }) => (
  <li
    className={`mx-4 cursor-pointer ${classprops}`}
    onClick={scrollTo}
  >
    {title}
  </li>
);

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
      <ul className=" md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {[
          { title: "Donate", sectionId: "welcome" },
          { title: "NGOs", sectionId: "ngos" },
          { title: "Success Stories", sectionId: "success-stories" },
        ].map(({ title, sectionId }, index) => (
          <NavBarItem
            key={title + index}
            title={title}
            scrollTo={() => scrollToSection(sectionId)} // pass the sectionId to scrollTo
          />
        ))}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className=" md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className=" md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md  animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {[
              { title: "Donate", sectionId: "welcome" },
              { title: "NGOs", sectionId: "ngos" },
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
