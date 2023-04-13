import { NavLink } from "react-router-dom";

const styleObject = {
  borderBottom: "solid ",
};
export const Nav = () => {
  return (
    <div id="navbar">
      <ul className="ul-style">
        <li>
          <NavLink
            to={"/"}
            style={({ isActive }) => (isActive ? styleObject : null)}
          >
            {" "}
            Home{" "}
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/History"}
            className={({ isActive }) => (isActive ? "NavLink" : null)}
          >
            {" "}
            History{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Member"}
            className={({ isActive }) => (isActive ? "NavLink" : null)}
          >
            Member
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
