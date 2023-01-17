import React from "react";

function IconMenu({className}: {className: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 21" fill="none">
      <rect width="22" height="4" x="5" y="16" fill="url(#menuA)" rx="2" />
      <rect width="27" height="4" y="8" fill="url(#menuB)" rx="2" />
      <rect width="15" height="4" x="12" fill="url(#menuC)" rx="2" />
      <defs>
        <linearGradient id="menuA" x1="16" x2="16" y1="16" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2C3036" />
          <stop offset="1" stopColor="#575F6B" />
        </linearGradient>
        <linearGradient id="menuB" x1="13.5" x2="13.5" y1="8" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2C3036" />
          <stop offset="1" stopColor="#575F6B" />
        </linearGradient>
        <linearGradient id="menuC" x1="19.5" x2="19.5" y1="0" y2="4" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2C3036" />
          <stop offset="1" stopColor="#575F6B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default IconMenu;
