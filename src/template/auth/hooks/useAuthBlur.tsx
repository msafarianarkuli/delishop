import React, {useCallback} from "react";

function useAuthBlur(btnId: string) {
  return useCallback(() => {
    const btn = document.getElementById(btnId) as HTMLButtonElement;
    if (btn?.classList.contains("bottom-0")) {
      btn.classList.remove("bottom-0");
      btn.classList.remove("rounded-none");
      btn.classList.add("bottom-[40px]");
    }
    if (btn?.classList.contains("left-0")) {
      btn.classList.remove("left-0");
      btn.classList.add("left-[19px]");
    }
    if (btn?.classList.contains("right-0")) {
      btn.classList.remove("right-0");
      btn.classList.add("right-[19px]");
    }
  }, [btnId]);
}

export default useAuthBlur;
