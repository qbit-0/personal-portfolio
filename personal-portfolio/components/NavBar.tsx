import { Tab, Tabs, TabsProps, useMediaQuery, useTheme } from "@mui/material";
import { FC, SyntheticEvent, useContext } from "react";
import { NavContext, NavValue } from "../utility/context/NavProvider";

const navLabels: Record<NavValue, string> = {
  home: "Home",
  about: "About",
  projects: "Projects",
  skills: "Skills",
  competition: "Competition",
  contact: "Contact",
};

type Props = TabsProps;

const NavBar: FC<Props> = (props) => {
  const { navValue, navCallbacks } = useContext(NavContext);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleNavChange = (event: SyntheticEvent, value: NavValue) => {
    const navCallback = navCallbacks[value].navCallback;
    if (navCallback !== undefined) navCallback();
  };

  if (matches) {
    return (
      <Tabs value={navValue} onChange={handleNavChange} {...props}>
        {Object.entries(navLabels).map(([value, label], index) => (
          <Tab sx={{ flex: 1 }} key={index} label={label} value={value} />
        ))}
      </Tabs>
    );
  } else {
    return (
      <>
        <Tabs value={navValue} onChange={handleNavChange} {...props}>
          <Tab sx={{ flex: 1 }} label={"Home"} value={"home"} />
          <Tab sx={{ flex: 1 }} label={"About"} value={"about"} />
          <Tab sx={{ flex: 1 }} label={"Projects"} value={"projects"} />
        </Tabs>
        <Tabs value={navValue} onChange={handleNavChange} {...props}>
          <Tab sx={{ flex: 1 }} label={"Skills"} value={"skills"} />
          <Tab sx={{ flex: 1 }} label={"Competition"} value={"skills"} />
          <Tab sx={{ flex: 1 }} label={"Contact"} value={"Contact"} />
        </Tabs>
      </>
    );
  }
};

export default NavBar;
