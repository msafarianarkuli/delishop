import {useCallback} from "react";

function useAuthFocus(btnId: string) {
  return useCallback(() => {
    const btn = document.getElementById(btnId) as HTMLButtonElement;
    if (btn?.classList.contains("bottom-[40px]")) {
      btn.classList.remove("bottom-[40px]");
      btn.classList.add("bottom-0");
      btn.classList.add("rounded-none");
    }
    if (btn?.classList.contains("left-[19px]")) {
      btn.classList.remove("left-[19px]");
      btn.classList.add("left-0");
    }
    if (btn?.classList.contains("right-[19px]")) {
      btn.classList.remove("right-[19px]");
      btn.classList.add("right-0");
    }
  }, [btnId]);
}

export default useAuthFocus;
