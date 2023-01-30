function IconStartFill({className}: {className: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 10" fill="none">
      <path
        fill="url(#starFill)"
        d="m5.5 0 1.842 3.1L11 3.82 8.481 6.454 8.9 10 5.5 8.524 2.1 10l.418-3.546L0 3.82l3.657-.72L5.5 0Z"
      />
      <defs>
        <linearGradient id="starFill" x1="7.634" x2="3.476" y1="6.49" y2=".36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#575F6B" />
          <stop offset="1" stopColor="#2C3036" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default IconStartFill;
