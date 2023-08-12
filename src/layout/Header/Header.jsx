import Nav from "../../components/Nav/index.js";

import {Container} from "../../components/Container/Container.styled.js";
import {HeaderStyled} from "./Header.styled.js";

const Header = () => {
	return (
		<HeaderStyled>
			<Container>
				<Nav>
					<p>Ok</p>
				</Nav>
			</Container>
		</HeaderStyled>
	)
}

export default Header;
