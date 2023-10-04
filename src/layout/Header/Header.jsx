import Nav from '../../components/Nav/index.js';


import {Container} from "../../components/common/Container/Container.styled.js";
import { HeaderSection, HeaderStyled } from './Header.styled.js';

const Header = () => {
	return (
		<HeaderSection>
			<HeaderStyled>
				<Container>
					<Nav />
				</Container>
			</HeaderStyled>
		</HeaderSection>
	)
}

export default Header;
