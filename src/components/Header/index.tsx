import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import { Timer, Scroll } from "phosphor-react";

export default function Header() {
  return (
    <HeaderContainer>
      <h2>Work Timer</h2>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
