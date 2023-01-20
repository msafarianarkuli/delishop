function IconSearch({className}: {className: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 28" fill="none" stroke="currentColor">
      <g strokeWidth="1.5" clipPath="url(#search)">
        <circle cx="12.673" cy="11.126" r="8.724" />
        <path strokeLinecap="round" d="m18.125 18.76 2.852 3.643" />
      </g>
      <defs>
        <clipPath id="search">
          <path fill="#fff" d="M.95.403H28.34v27.392H.95z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default IconSearch;
