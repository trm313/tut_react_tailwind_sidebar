import { useState } from "react";
import routes from "../constants/routes";
import NavItem from "./NavItem";
import NavHeader from "./NavHeader";

const NavBar = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  return (
    <nav
      className={`
			bg-gray-900 text-gray-100

      lg:flex-shrink-0

      flex flex-row justify-around
			lg:flex-col lg:justify-start
      w-full ${isMinimized ? "lg:w-[5.5rem]" : "lg:w-[18rem]"}

      lg:p-2
      lg:overflow-y-auto lg:overflow-x-hidden
      lg:transition-[width] lg:duration-200
      `}
    >
      <NavHeader
        onToggle={() => setIsMinimized((current) => !current)}
        isMinimized={isMinimized}
      />
      {routes.map((route, index) => (
        <NavItem
          key={`navitem-${index}`}
          text={route.text}
          icon={route.icon}
          isMinimized={isMinimized}
        />
      ))}
    </nav>
  );
};

export default NavBar;
