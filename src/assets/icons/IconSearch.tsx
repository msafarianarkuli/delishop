function IconSearch({className}: {className: string}) {
  return (
    <svg className={className} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.9517 20.9375L16.4517 16.4375"
        stroke="url(#paint0_linear_4_1082)"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18 10C18 14.4189 14.4182 18 10.0004 18C5.58252 18 2 14.4189 2 10C2 5.58115 5.58178 2 9.99963 2C14.4175 2 18 5.58195 18 10Z"
        stroke="url(#paint1_linear_4_1082)"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4_1082"
          x1="17.0194"
          y1="16.6093"
          x2="17.5907"
          y2="22.6514"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2C3036" />
          <stop offset="1" stop-color="#575F6B" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4_1082"
          x1="16.4"
          y1="16.9333"
          x2="3.06667"
          y2="4.66667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2C3036" />
          <stop offset="1" stop-color="#575F6B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default IconSearch;
