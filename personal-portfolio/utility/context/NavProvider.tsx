import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

const NavValues = ["home", "about", "projects", "skills", "contact"] as const;
export type NavValue = typeof NavValues[number];
type NavCallbacks = Record<
  NavValue,
  {
    navCallback?: Function;
    setNavCallback: Dispatch<SetStateAction<Function>>;
  }
>;

type NavContextType = {
  navValue: NavValue;
  setNavValue: Dispatch<SetStateAction<NavValue>>;
  navCallbacks: NavCallbacks;
};

export const NavContext = createContext<NavContextType>({} as NavContextType);

type Props = {
  children: ReactNode;
};

const NavProvider: FC<Props> = ({ children }) => {
  const [navValue, setNavValue] = useState<NavValue>("home");
  const navCallbacks: NavCallbacks = {} as NavCallbacks;
  NavValues.forEach((value: NavValue) => {
    const [navCallback, setNavCallback] = useState<Function>();
    navCallbacks[value] = {
      navCallback,
      setNavCallback,
    };
  });

  return (
    <NavContext.Provider
      value={{
        navValue,
        setNavValue,
        navCallbacks,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
