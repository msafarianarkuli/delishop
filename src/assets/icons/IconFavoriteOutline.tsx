import React from "react";

function IconFavoriteOutline({className}: {className: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 23" fill="none" stroke="currentColor">
      <path
        strokeWidth="1.3"
        d="m23.313 6.713.002.022.003.022c.016.095.129.905-.195 2.276-.466 1.974-1.543 3.776-3.125 5.211l-.002.002-8.064 7.194-7.928-7.195C2.42 12.811 1.342 11.007.876 9.033.553 7.66.667 6.852.682 6.758l.003-.023.002-.023C1.013 3.122 3.521.65 6.535.65c1.994 0 3.785 1.064 4.838 2.866l.555.95.564-.945c1.06-1.774 2.935-2.87 4.973-2.87 3.014 0 5.522 2.471 5.848 6.062Z"
      />
    </svg>
  );
}

export default IconFavoriteOutline;
