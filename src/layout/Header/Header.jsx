import Nav from "../../components/Nav/index.js";

import {Container} from "../../components/common/Container/Container.styled.js";
import {HeaderStyled} from "./Header.styled.js";

const Header = () => {
	return (
		<HeaderStyled>
			<Container>
				<Nav />
			</Container>
		</HeaderStyled>
	)
}

export default Header;
