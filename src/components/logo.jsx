import React from "react";

const Logo = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill={color} // Dynamically set the fill color
      className="logo-svg"
    >
      <circle cx="50" cy="50" r="48" stroke={color} strokeWidth="4" fill="none" />
      <circle cx="30" cy="35" r="8" fill={color} />
      <circle cx="70" cy="35" r="8" fill={color} />
      <circle cx="50" cy="70" r="10" fill={color} />
      <line x1="30" y1="35" x2="50" y2="70" stroke={color} strokeWidth="2" />
      <line x1="70" y1="35" x2="50" y2="70" stroke={color} strokeWidth="2" />
      <line x1="30" y1="35" x2="70" y2="35" stroke={color} strokeWidth="2" />
    </svg>
  );
};

export default Logo;
