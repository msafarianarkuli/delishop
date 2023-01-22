function IconMinus({className}: {className: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 5" fill="none">
      <path fill="url(#minus)" d="M15.2.2H.8v4.2h14.4V.2Z" />
      <defs>
        <linearGradient id="minus" x1="9.8" x2="9.806" y1="3.018" y2=".2" gradientUnits="userSpaceOnUse">
          <stop stopColor="#575F6B" />
          <stop offset="1" stopColor="#2C3036" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default IconMinus;
