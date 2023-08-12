import Logo from "../Logo/index.js";

import { TbMenu2 } from "react-icons/tb";
import {BurgerButton, BurgerIcon, StyledNav} from "./Nav.styled.js";

const Nav = () => {
	return (
		<StyledNav>
			<Logo />
			<BurgerButton>
				<BurgerIcon />
			</BurgerButton>
		</StyledNav>
	)
}

export default Nav;
