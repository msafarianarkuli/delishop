import {createContext, ReactNode, useContext, useState} from "react";

interface GuestContextType {
  isGuest: boolean;
  onInterAsGuest: () => void;
  onRemoveGuest: () => void;
}

const GuestContext = createContext<GuestContextType>({
  isGuest: false,
  onInterAsGuest: () => {},
  onRemoveGuest: () => {},
});

interface GuestProviderProps {
  children: ReactNode;
}

export function GuestProvider({children}: GuestProviderProps) {
  const [isGuest, setIsGuest] = useState<any>(false);

  const onInterAsGuest = async () => {
    setIsGuest(true);
    localStorage.setItem("isGuest", "true");
  };

  const onRemoveGuest = async () => {
    setIsGuest(false);
    localStorage.removeItem("isGuest");
  };

  return <GuestContext.Provider value={{isGuest, onInterAsGuest, onRemoveGuest}}>{children}</GuestContext.Provider>;
}

export function useGuest() {
  return useContext(GuestContext);
}
