function IconWallet({className}: {className: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24" fill="none" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 3.2v17.6c0 .584.235 1.143.654 1.556.418.412.986.644 1.578.644H25.55c.296 0 .58-.116.789-.322.21-.207.327-.486.327-.778V6.5c0-.292-.118-.572-.327-.778a1.124 1.124 0 0 0-.79-.322H3.233c-.592 0-1.16-.232-1.578-.644A2.184 2.184 0 0 1 1 3.2Zm0 0c0-.583.235-1.143.654-1.556A2.248 2.248 0 0 1 3.232 1h18.97"
      />
      <circle cx="19.944" cy="15.056" r="1.833" />
    </svg>
  );
}

export default IconWallet;
