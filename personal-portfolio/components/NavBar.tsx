import { Tab, Tabs, TabsProps } from "@mui/material";
import { FC, useContext } from "react";
import { NavContext, NavValue } from "../utility/context/NavProvider";

const navLabels: Record<NavValue, string> = {
  home: "Home",
  about: "About",
  projects: "Projects",
  skills: "Skills",
  contact: "Contact",
};

type Props = TabsProps;

const NavBar: FC<Props> = (props) => {
  const { navValue, navCallbacks } = useContext(NavContext);

  const handleNavClick = (value: NavValue) => {
    return () => {
      const navCallback = navCallbacks[value].navCallback;
      if (navCallback !== undefined) navCallback();
    };
  };

  return (
    <Tabs value={navValue} {...props}>
      {Object.entries(navLabels).map(([value, label], index) => (
        <Tab
          key={index}
          label={label}
          value={value}
          onClick={handleNavClick(value as NavValue)}
        />
      ))}
    </Tabs>
  );
};

export default NavBar;
