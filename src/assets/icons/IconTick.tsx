import React from "react";

function IconTick({className}: {className: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 15" fill="none">
      <path
        fill="url(#tick)"
        fillRule="evenodd"
        d="M16.584.267c.485.412.556 1.155.16 1.66l-9.512 12.1c-.77.978-2.143 1.152-3.114.393L.453 11.56c-.5-.39-.602-1.13-.226-1.651a1.104 1.104 0 0 1 1.586-.236l3.665 2.86 9.511-12.1a1.103 1.103 0 0 1 1.595-.166Z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient id="tick" x1="15" x2="0" y1="2.5" y2="7.446" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2C3036" />
          <stop offset="1" stopColor="#575F6B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default IconTick;
