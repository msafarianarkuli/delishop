function IconMinus({className}: {className: string}) {
  return (
    <svg
      className={`${className} drop-shadow-[0px_1px_3px_rgba(36,65,93,0.298)]`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 5"
      fill="none"
    >
      <path fill="url(#minus)" d="M15.2.2H.8v4.2h14.4V.2Z" />
      <defs>
        <linearGradient id="minus" x1="9.8" x2="9.806" y1="3.018" y2=".2" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default IconMinus;
