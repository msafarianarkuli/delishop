function IconAdd({className, fill}: {className: string; fill?: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
      <path fill="url(#add)" d="M5.943 15.2v-5.143H.8V5.942h5.143V.8h4.114v5.142H15.2v4.115h-5.143V15.2H5.943Z" />
      <defs>
        <linearGradient id="add" x1="9.224" x2="4.472" y1="9.857" y2="1.534" gradientUnits="userSpaceOnUse">
          <stop stopColor={fill ? fill : "#E6E6E6"} />
          <stop offset="1" stopColor={fill ? fill : "#E6E6E6"} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default IconAdd;
