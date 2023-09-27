function IconAngleLeft({className, fill}: {className: string; fill?: string}) {
  return (
    <svg className={className} viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 12.8623L3.43725 7.28745L9 1.71255L7.28745 0L0 7.28745L7.28745 14.5749L9 12.8623Z"
        fill={fill ? fill : "#2C3036"}
      />
    </svg>
  );
}

export default IconAngleLeft;
