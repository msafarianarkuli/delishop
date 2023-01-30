function IconConfection({className}: {className: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 39" fill="none">
      <path
        fill="url(#confectionIconA)"
        d="M30.373 30.31H1.799C.807 30.31 0 31.16 0 32.206v4.901C0 38.15.807 39 1.8 39h28.573c.992 0 1.799-.85 1.799-1.894v-4.901c0-1.045-.807-1.894-1.8-1.894Z"
      />
      <path
        fill="url(#confectionIconB)"
        d="M4.127 27.637H27.94c.992 0 1.799-.85 1.799-1.893v-3.677c0-1.044-.807-1.893-1.8-1.893H4.129c-.993 0-1.8.85-1.8 1.893v3.677c0 1.044.807 1.893 1.8 1.893Z"
      />
      <path
        fill="url(#confectionIconC)"
        d="M7.725 17.723h16.721c.992 0 1.8-.85 1.8-1.894v-2.45c0-1.045-.807-1.894-1.8-1.894h-6.773v-3.9c0-.568-.27-1.07-.681-1.371.845-.488 1.424-1.624 1.424-2.979 0-1.78-1.784-3.235-2.363-3.235-.648 0-2.364 1.47-2.364 3.235 0 1.376.598 2.525 1.464 3a1.696 1.696 0 0 0-.655 1.35v3.9H7.726c-.992 0-1.799.849-1.799 1.893v2.45c0 1.045.807 1.895 1.8 1.895Z"
      />
      <defs>
        <linearGradient id="confectionIconA" x1="3" x2="4.428" y1="29.085" y2="41.484" gradientUnits="userSpaceOnUse">
          <stop stopColor="#575F6B" />
          <stop offset="1" stopColor="#2C3036" />
        </linearGradient>
        <linearGradient
          id="confectionIconB"
          x1="4.884"
          x2="6.12"
          y1="19.121"
          y2="29.769"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#575F6B" />
          <stop offset="1" stopColor="#2C3036" />
        </linearGradient>
        <linearGradient
          id="confectionIconC"
          x1="7.821"
          x2="16.193"
          y1="-2.499"
          y2="20.012"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#575F6B" />
          <stop offset="1" stopColor="#2C3036" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default IconConfection;
