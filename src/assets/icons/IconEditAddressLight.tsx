function IconEditAddressLight({className}: {className: string}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
    >
      <g clipPath="url(#IconEditAddressLightA)">
        <path
          fill="url(#IconEditAddressLightB)"
          d="M12.878.213a.727.727 0 0 0-1.029 0l-8 8a.727.727 0 0 0-.213.514v2.91c0 .401.326.727.728.727h2.909a.727.727 0 0 0 .514-.213l8-8a.727.727 0 0 0 0-1.029L12.877.213Z"
        />
        <path
          fill="url(#IconEditAddressLightC)"
          d="M15.273 7.273a.727.727 0 0 0-.727.727v6.546H1.455V1.455H8A.727.727 0 0 0 8 0H.727A.727.727 0 0 0 0 .727v14.546c0 .401.326.727.727.727h14.546a.727.727 0 0 0 .727-.727V8a.727.727 0 0 0-.727-.727Z"
        />
      </g>
      <defs>
        <linearGradient
          id="IconEditAddressLightB"
          x1="9.818"
          x2="9.818"
          y1="0"
          y2="12.364"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#E1E2E8" />
        </linearGradient>
        <linearGradient id="IconEditAddressLightC" x1="8" x2="8" y1="0" y2="16" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#E1E2E8" />
        </linearGradient>
        <clipPath id="IconEditAddressLightA">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default IconEditAddressLight;
