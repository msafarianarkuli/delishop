function IconRestaurant({className}: {className: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 34" fill="none">
      <path fill="url(#restaurantIconA)" d="M42.778 27.775H.223v6.03h42.555v-6.03Z" />
      <path
        fill="url(#restaurantIconB)"
        d="M22.618 3.193V1.12a1.12 1.12 0 1 0-2.239 0v2.073C9.03 3.783 0 13.144 0 24.64h43c0-11.497-9.024-20.857-20.382-21.448Z"
      />
      <defs>
        <linearGradient
          id="restaurantIconA"
          x1="21.501"
          x2="21.501"
          y1="27.775"
          y2="33.805"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#575F6B" />
          <stop offset="0" stopColor="#575F6B" />
          <stop offset="1" stopColor="#2C3036" />
        </linearGradient>
        <linearGradient id="restaurantIconB" x1="21.5" x2="21.5" y1="0" y2="24.641" gradientUnits="userSpaceOnUse">
          <stop stopColor="#575F6B" />
          <stop offset="0" stopColor="#575F6B" />
          <stop offset="1" stopColor="#2C3036" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default IconRestaurant;
