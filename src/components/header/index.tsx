import { Clock, ClipboardCheck } from "lucide-react";
import { HeaderContainer } from "./style";
import { NavLink } from "react-router-dom";

export function Header() {
  return <HeaderContainer>
    <span aria-label="Study Timer">Study Timer</span>
    <nav>
      <NavLink to="/" title="timer">
        <Clock color="#fff" />
      </NavLink>
      <NavLink to="/history" title="historico">
        <ClipboardCheck color="#fff" />
      </NavLink>
    </nav>
  </HeaderContainer>;
}
