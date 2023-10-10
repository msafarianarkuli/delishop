function IconMenu({className}: {className: string}) {
  return (
    <svg className={className} viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="22" height="4" rx="2" transform="matrix(-1 0 0 1 23 16)" fill="url(#paint0_linear_4_1075)" />
      <rect width="27" height="4" rx="2" transform="matrix(-1 0 0 1 28 8)" fill="url(#paint1_linear_4_1075)" />
      <rect width="15" height="4" rx="2" transform="matrix(-1 0 0 1 16 0)" fill="url(#paint2_linear_4_1075)" />
      <defs>
        <linearGradient id="paint0_linear_4_1075" x1="11" y1="0" x2="11" y2="4" gradientUnits="userSpaceOnUse">
          <stop stop-color="#2C3036" />
          <stop offset="1" stop-color="#575F6B" />
        </linearGradient>
        <linearGradient id="paint1_linear_4_1075" x1="13.5" y1="0" x2="13.5" y2="4" gradientUnits="userSpaceOnUse">
          <stop stop-color="#2C3036" />
          <stop offset="1" stop-color="#575F6B" />
        </linearGradient>
        <linearGradient id="paint2_linear_4_1075" x1="7.5" y1="0" x2="7.5" y2="4" gradientUnits="userSpaceOnUse">
          <stop stop-color="#2C3036" />
          <stop offset="1" stop-color="#575F6B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default IconMenu;
