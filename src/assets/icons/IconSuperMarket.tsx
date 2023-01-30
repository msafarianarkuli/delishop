function IconSuperMarket({className}: {className: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 35" fill="none">
      <path
        fill="url(#superMarketIconA)"
        d="M37.103 9.916h-3.65l4.75-5.513c1.044-1.213 1.03-2.936-.03-3.849-1.06-.914-2.768-.672-3.812.54l-7.6 8.822H13.24l-7.6-8.822C4.595-.118 2.89-.36 1.827.554c-1.06.914-1.074 2.637-.03 3.849l4.75 5.513h-3.65c-1.6 0-2.897.788-2.897 1.76v1.76h40v-1.76c0-.972-1.297-1.76-2.897-1.76Z"
      />
      <path
        fill="url(#superMarketIconB)"
        d="M37.635 15.343H2.365L5.656 31.43c.321 1.567 1.878 2.838 3.478 2.838h21.304c1.6 0 3.184-1.264 3.538-2.824l3.659-16.101ZM8.855 31.928 5.868 17.986 8.7 17.38l2.988 13.942-2.833.607Zm9.188-.62h-2.897V17.185h2.897v14.123Zm6.76 0h-2.898V17.185h2.897v14.123Zm6.35.62-2.833-.607 2.987-13.942 2.833.607-2.988 13.942Z"
      />
      <defs>
        <linearGradient id="superMarketIconA" x1="-14" x2=".565" y1="-3.476" y2="29.167" gradientUnits="userSpaceOnUse">
          <stop stopColor="#575F6B" />
          <stop offset="1" stopColor="#2C3036" />
        </linearGradient>
        <linearGradient
          id="superMarketIconB"
          x1="-9.979"
          x2="16.079"
          y1="10.446"
          y2="47.006"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#575F6B" />
          <stop offset="1" stopColor="#2C3036" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default IconSuperMarket;
