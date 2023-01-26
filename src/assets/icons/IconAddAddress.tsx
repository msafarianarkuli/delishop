function IconAddAddress({className}: {className: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
      <g clipPath="url(#addAddressA)">
        <path
          fill="url(#addAddressB)"
          d="M16 0H2a2.006 2.006 0 0 0-2 2v14a2.006 2.006 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2V2a2.006 2.006 0 0 0-2-2Zm0 10a1 1 0 0 1-1 1h-4v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h4V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4h4a1 1 0 0 1 1 1v2Z"
        />
      </g>
      <defs>
        <linearGradient id="addAddressB" x1="9" x2="9" y1="0" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2C3036" />
          <stop offset="1" stopColor="#575F6B" />
        </linearGradient>
        <clipPath id="addAddressA">
          <path fill="#fff" d="M0 0h18v18H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default IconAddAddress;
