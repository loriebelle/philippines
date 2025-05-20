import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import navIcon from "../assets/nav-icon.svg";
import navCloseIcon from "../assets/nav-close-icon.svg";

function Nav({ isOpen, setIsOpen }) {
  const scrollRef = useRef(null);
  const dragState = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    moved: false,
  });

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }

    // Cleanup just in case
    return () => {
      document.body.classList.remove("nav-open");
    };
  }, [isOpen]);

  const handleMouseDown = (e) => {
    dragState.current.isDown = true;
    dragState.current.startX = e.clientX;
    dragState.current.scrollLeft = scrollRef.current.scrollLeft;
    dragState.current.moved = false;
    scrollRef.current.classList.add("grabbing");
  };

  const handleMouseMove = (e) => {
    if (!dragState.current.isDown) return;
    const x = e.clientX;
    const walk = dragState.current.startX - x;
    if (Math.abs(walk) > 5) dragState.current.moved = true; // flag it as a drag
    scrollRef.current.scrollLeft = dragState.current.scrollLeft + walk;
  };

  const handleMouseUp = () => {
    dragState.current.isDown = false;
    scrollRef.current.classList.remove("grabbing");
    scrollRef.current.classList.add("grab");
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group fixed bottom-5 left-1/2 transform -translate-x-1/2 z-[9999]
    w-20 h-20 md:w-23 md:h-23 rounded-full shadow-xl overflow-hidden transition-all duration-500 ease-in-out hover:scale-105`}
      >
        <div className="relative w-full h-full">
          {/* Open Icon */}
          <img
            src={navIcon}
            alt="Open nav"
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out
    ${isOpen ? "opacity-0" : "opacity-60 group-hover:opacity-100"}`}
          />

          {/* Close Icon */}
          <img
            src={navCloseIcon}
            alt="Close nav"
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ease-in-out
        ${isOpen ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      </button>

      {/* Fullscreen Navigation Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gradient-to-b from-[#F3F3F3] via-[#F5EBDC] to-[#E9D5C0]
 z-[9998] transition-transform duration-800 ease-in-out
        ${isOpen ? "translate-y-0" : "translate-y-full"}
        flex flex-col items-center justify-center px-5 md:px-30`}
      >
        {/* Horizontal Scrollable Nav */}
        <div
          ref={scrollRef}
          className="nav px-4 py-4 w-full overflow-x-auto overflow-y-hidden select-none"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ cursor: "grab" }}
        >
          <div className="flex gap-8 min-w-fit mx-auto items-center justify-center">
            <NavItem
              to="/"
              label="Home"
              image="media/home.jpg"
              dragState={dragState}
              onClick={() => setIsOpen(false)}
            />
            <NavItem
              to="/culture"
              label="Culture & Traditions"
              image="media/culture.jpg"
              dragState={dragState}
              onClick={() => setIsOpen(false)}
            />
            <NavItem
              to="/symbols"
              label="National Symbols"
              image="media/symbols.jpg"
              dragState={dragState}
              onClick={() => setIsOpen(false)}
            />
            <NavItem
              to="/cuisine"
              label="Filipino Cuisine"
              image="media/cuisine.jpg"
              dragState={dragState}
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function NavItem({ to, label, image, dragState, onClick }) {
  const handleClick = (e) => {
    if (dragState.current.moved) {
      e.preventDefault(); // cancel click if dragged
      return;
    }
    if (onClick) onClick(); // close nav
  };

  return (
    <Link
      to={to}
      className="flex-shrink-0 md:w-70 w-60 snap-start text-center no-underline text-black"
      onClick={handleClick}
    >
      <span className="block text-lg font-medium mb-2">{label}</span>
      <img
        src={image}
        alt={label}
        className="w-full md:aspect-[3/3.5] aspect-[2/3] object-cover rounded-lg shadow-md"
      />
    </Link>
  );
}

export default Nav;
