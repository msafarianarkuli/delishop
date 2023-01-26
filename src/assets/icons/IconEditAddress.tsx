function IconEditAddress({className}: {className: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="currentColor">
      <path
        fill="url(#editAddress)"
        d="M14.444 8.522h3.46V18H0V0h8.39v3.478H3.46v11.044h10.984v-6ZM6.856 11.23l2.696-.225 6.182-6.214-2.473-2.486L7.08 8.519l-.224 2.711ZM18 2.512 15.527.026l-1.442 1.45 2.473 2.486L18 2.512Z"
      />
      <defs>
        <linearGradient id="editAddress" x1="0" x2="23.032" y1="18.049" y2="-4.86" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2C3036" />
          <stop offset="1" stopColor="#575F6B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default IconEditAddress;
