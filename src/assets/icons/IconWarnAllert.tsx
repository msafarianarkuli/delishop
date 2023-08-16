function IconWarnAlert({className}: {className: string}) {
  return (
    <svg
      className={className}
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_48_1486)">
        <circle cx="17" cy="17" r="17" fill="#FF5C01" fill-opacity="0.7" />
      </g>
      <defs>
        <filter
          id="filter0_b_48_1486"
          x="-4"
          y="-4"
          width="42"
          height="42"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_48_1486" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_48_1486" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default IconWarnAlert;
