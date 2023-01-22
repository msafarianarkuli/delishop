import React from "react";

function IconLogoutLight({className}: {className: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
      <path
        fill="url(#logoutLightA)"
        d="M15.948 8.922a.674.674 0 0 1-.144.218l-2 1.999a.667.667 0 0 1-.942-.943l.862-.862H10a.666.666 0 1 1 0-1.333h3.724l-.862-.862a.666.666 0 1 1 .942-.943l2 2a.667.667 0 0 1 .145.727Z"
      />
      <path
        fill="url(#logoutLightB)"
        d="M11.333 6.667A.666.666 0 0 1 10.667 6V2.667H8v10.666a.668.668 0 0 1-.475.639l-2.316.695h5.458v-3.334a.666.666 0 1 1 1.333 0v4a.667.667 0 0 1-.667.667H.667c-.024 0-.046-.01-.069-.013a.653.653 0 0 1-.283-.098c-.014-.01-.032-.01-.046-.021-.006-.004-.008-.011-.013-.015a.662.662 0 0 1-.177-.211c-.01-.018-.012-.037-.019-.056-.021-.05-.045-.1-.053-.156-.003-.02.003-.039.002-.058 0-.013-.009-.025-.009-.039V2c0-.318.225-.591.536-.653L7.203.013A.666.666 0 0 1 8 .666v.667h3.333c.369 0 .667.299.667.667v4a.666.666 0 0 1-.667.667Z"
      />
      <defs>
        <linearGradient id="logoutLightA" x1="9.541" x2="19.749" y1="8.834" y2="8.834" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset=".54" stopColor="#fff" />
        </linearGradient>
        <linearGradient id="logoutLightB" x1=".374" x2="18.751" y1="8.5" y2="8.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset=".54" stopColor="#fff" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default IconLogoutLight;
