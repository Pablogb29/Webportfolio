"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface VerticalNavProps {
  sections: string[];
}

export const VerticalNav: React.FC<VerticalNavProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>("");

  // Function to handle the scroll action
  const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Find which section is currently in view
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          const sectionTop = top + window.scrollY;
          const sectionBottom = bottom + window.scrollY;
          
          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center space-y-4">
      {sections.map((sectionId) => (
        <button
          key={sectionId}
          onClick={() => scrollToSection(sectionId)}
          className="w-3 h-3 rounded-full border border-zinc-500 flex items-center justify-center focus:outline-none"
          aria-label={`Navigate to ${sectionId.replace("-section", "")}`}
        >
          <div 
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeSection === sectionId ? 'bg-blue-500' : 'bg-transparent'}`}
          />
        </button>
      ))}
    </div>
  );
};