"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "how-it-works",
        "why-us",
        "our-team",
        "contact",
      ];
      let currentSection = "";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        const sectionTop = section.getBoundingClientRect().top;
        if (
          sectionTop <= window.innerHeight / 2 &&
          sectionTop >= -section.offsetHeight / 2
        ) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set the initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="bg-black p-4 fixed w-full top-0 z-10">
      <ul className="flex justify-center space-x-8">
        <li>
          <a
            href="#home"
            className={`text-white uppercase transition-colors duration-300 ${activeSection === "home" ? "text-gray-400" : "hover:text-gray-400"}`}
          >
            Artbridge
          </a>
        </li>
        <li>
          <a
            href="#how-it-works"
            className={`text-white uppercase transition-colors duration-300 ${activeSection === "how-it-works" ? "text-gray-400" : "hover:text-gray-400"}`}
          >
            Jak To Działa
          </a>
        </li>
        <li>
          <a
            href="#why-us"
            className={`text-white uppercase transition-colors duration-300 ${activeSection === "why-us" ? "text-gray-400" : "hover:text-gray-400"}`}
          >
            Dlaczego My
          </a>
        </li>
        <li>
          <a
            href="#our-team"
            className={`text-white uppercase transition-colors duration-300 ${activeSection === "our-team" ? "text-gray-400" : "hover:text-gray-400"}`}
          >
            Nasz Team
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`text-white uppercase transition-colors duration-300 ${activeSection === "contact" ? "text-gray-400" : "hover:text-gray-400"}`}
          >
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
}
