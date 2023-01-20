function IconDownload({className}: {className: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <g strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.9" clipPath="url(#download)">
        <path d="M22.5 15.79v6.69h-21v-6.69M12 16.75V.52" />
        <path d="M18.68 11.02 12 17.7l-6.68-6.68" />
      </g>
      <defs>
        <clipPath id="download">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default IconDownload;
