// import {Link} from "react-router-dom";

import {LogoImg} from "./Logo.Styled.js";

import logo from '../../../assets/mainLogo.svg';
import {Link} from "react-router-dom";

const Logo = () => {
	return (
		<Link href="/">
			<LogoImg src={logo} alt="main logo"/>
		</Link>
	)
}

export default Logo;
