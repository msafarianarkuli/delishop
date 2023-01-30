function IconMore({className}: {className: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 8" fill="none">
      <circle cx="4" cy="4" r="4" fill="url(#moreIconA)" />
      <circle cx="30" cy="4" r="4" fill="url(#moreIconB)" />
      <circle cx="17" cy="4" r="4" fill="url(#moreIconC)" />
      <defs>
        <linearGradient id="moreIconA" x1="4" x2="4" y1="0" y2="8" gradientUnits="userSpaceOnUse">
          <stop stopColor="#575F6B" />
          <stop offset="1" stopColor="#2C3036" />
        </linearGradient>
        <linearGradient id="moreIconB" x1="30" x2="30" y1="0" y2="8" gradientUnits="userSpaceOnUse">
          <stop stopColor="#575F6B" />
          <stop offset="1" stopColor="#2C3036" />
        </linearGradient>
        <linearGradient id="moreIconC" x1="17" x2="17" y1="0" y2="8" gradientUnits="userSpaceOnUse">
          <stop stopColor="#575F6B" />
          <stop offset="1" stopColor="#2C3036" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default IconMore;
