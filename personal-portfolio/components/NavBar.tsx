import { Tab, Tabs, TabsProps } from "@mui/material";
import { FC, SyntheticEvent, useContext } from "react";
import { NavContext, NavValue } from "../utility/context/NavProvider";

const navLabels: Record<NavValue, string> = {
  home: "Home",
  about: "My Story",
  projects: "Projects",
  skills: "Skills",
  contact: "Contact",
};

type Props = TabsProps;

const NavBar: FC<Props> = (props) => {
  const { navValue, navCallbacks } = useContext(NavContext);

  const handleNavChange = (event: SyntheticEvent, value: NavValue) => {
    const navCallback = navCallbacks[value].navCallback;
    if (navCallback !== undefined) navCallback();
  };

  return (
    <Tabs value={navValue} onChange={handleNavChange} {...props}>
      {Object.entries(navLabels).map(([value, label], index) => (
        <Tab key={index} label={label} value={value} />
      ))}
    </Tabs>
  );
};

export default NavBar;
