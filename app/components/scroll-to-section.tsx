"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ScrollToSectionProps {
  targetId: string;
  className?: string;
  children?: React.ReactNode;
}

export const ScrollToSection: React.FC<ScrollToSectionProps> = ({
  targetId,
  className = "",
  children,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  // Function to handle the scroll action
  const scrollToSection = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Hide the scroll indicator when user has scrolled past a certain point
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Hide the scroll indicator after scrolling down a bit
      setIsVisible(scrollPosition < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={`cursor-pointer ${className}`}
      onClick={scrollToSection}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 1 }}
    >
      {children || (
        <div className="flex flex-col items-center">
          <span className="text-zinc-400 text-sm mb-2">Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-400 animate-bounce"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>
      )}
    </motion.div>
  );
};