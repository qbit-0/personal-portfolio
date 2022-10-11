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
  const matches = useMediaQuery(theme.breakpoints.up("sm"), {
    defaultMatches: true,
  });

  const handleNavClick = (value: NavValue) => {
    const navCallback = navCallbacks[value].navCallback;
    return () => {
      if (navCallback !== undefined) navCallback();
    };
  };

  if (matches) {
    return (
      <Tabs value={navValue} {...props}>
        {Object.entries(navLabels).map(([value, label], index) => (
          <Tab
            sx={{ flex: 1 }}
            key={index}
            label={label}
            value={value}
            onClick={handleNavClick(value as NavValue)}
          />
        ))}
      </Tabs>
    );
  } else {
    return (
      <>
        <Tabs value={navValue} {...props}>
          <Tab
            sx={{ flex: 1 }}
            label={"Home"}
            value={"home"}
            onClick={handleNavClick("home")}
          />
          <Tab
            sx={{ flex: 1 }}
            label={"About"}
            value={"about"}
            onClick={handleNavClick("about")}
          />
          <Tab
            sx={{ flex: 1 }}
            label={"Projects"}
            value={"projects"}
            onClick={handleNavClick("projects")}
          />
        </Tabs>
        <Tabs value={navValue} {...props}>
          <Tab
            sx={{ flex: 1 }}
            label={"Skills"}
            value={"skills"}
            onClick={handleNavClick("skills")}
          />
          <Tab
            sx={{ flex: 1 }}
            label={"Competition"}
            value={"competition"}
            onClick={handleNavClick("competition")}
          />
          <Tab
            sx={{ flex: 1 }}
            label={"Contact"}
            value={"contact"}
            onClick={handleNavClick("contact")}
          />
        </Tabs>
      </>
    );
  }
};

export default NavBar;
