function IconAccount({className}: {className: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="currentColor">
      <mask
        id="iconAccountA"
        width="19"
        height="9"
        x="4"
        y="16"
        maskUnits="userSpaceOnUse"
        style={{maskType: "luminance"}}
      >
        <path fill="#fff" fillRule="evenodd" d="M4.565 16.544h18.077v8.415H4.565v-8.415Z" clipRule="evenodd" />
      </mask>
      <g mask="url(#iconAccountA)">
        <path
          fillRule="evenodd"
          d="M13.605 18.256c-4.863 0-7.328.835-7.328 2.484 0 1.664 2.465 2.507 7.328 2.507 4.861 0 7.325-.835 7.325-2.484 0-1.664-2.464-2.508-7.325-2.508Zm0 6.703c-2.236 0-9.04 0-9.04-4.219 0-3.761 5.16-4.196 9.04-4.196 2.235 0 9.037 0 9.037 4.219 0 3.761-5.158 4.196-9.037 4.196Z"
          clipRule="evenodd"
        />
      </g>
      <mask
        id="iconAccountB"
        width="13"
        height="13"
        x="7"
        y="2"
        maskUnits="userSpaceOnUse"
        style={{maskType: "luminance"}}
      >
        <path fill="#fff" fillRule="evenodd" d="M7.544 2.283h12.12V14.4H7.544V2.283Z" clipRule="evenodd" />
      </mask>
      <g mask="url(#iconAccountB)">
        <path
          fillRule="evenodd"
          d="M13.605 3.912a4.436 4.436 0 0 0-4.432 4.43 4.42 4.42 0 0 0 4.399 4.43l.033.815v-.814a4.435 4.435 0 0 0 4.429-4.43 4.434 4.434 0 0 0-4.43-4.431Zm0 10.49h-.037a6.048 6.048 0 0 1-6.024-6.063c0-3.338 2.718-6.057 6.06-6.057a6.066 6.066 0 0 1 6.06 6.06 6.065 6.065 0 0 1-6.06 6.06Z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default IconAccount;
