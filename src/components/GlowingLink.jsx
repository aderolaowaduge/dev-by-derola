import React, { useState, useEffect, useRef } from "react";

function GlowingLink({ href, children, lingerMs = 0, className = "", isLogo = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const [initialGlow, setInitialGlow] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const initialTimer = setTimeout(() => setInitialGlow(false), 1500);
    return () => clearTimeout(initialTimer);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
      timeoutRef.current = null;
    }, lingerMs);
  };

  const isActive = isHovered || initialGlow;

  return (
    <a
      href={href}
      className={`ease-in-out ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: `text-shadow 600ms ease, color 600ms ease`,
        textShadow: isActive || isLogo ? "0 0 15px rgba(20,184,255,0.8)" : "none",
        color: isActive ? "#ff1493" : "", // hot pink or fallback
      }}
    >
      {children}
    </a>
  );
}

export default GlowingLink;
