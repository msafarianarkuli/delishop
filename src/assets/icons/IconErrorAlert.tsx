function IconErrorAlert({className}: {className: string}) {
  return (
    <svg
      className={className}
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_48_1497)">
        <circle cx="17" cy="17" r="17" fill="black" fill-opacity="0.6" />
      </g>
      <path d="M11 11L23.7279 23.7279" stroke="#E1E1E1" strokeWidth="2" strokeLinecap="round" />
      <path d="M11 23.7275L23.7279 10.9996" stroke="#E1E1E1" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <filter
          id="filter0_b_48_1497"
          x="-4"
          y="-4"
          width="42"
          height="42"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_48_1497" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_48_1497" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default IconErrorAlert;
