// import {Link} from "react-router-dom";

import {LogoImg} from "./Logo.Styled.js";

import logo from '../../assets/mainLogo.svg';

const Logo = () => {
	return (
		<a href="/">
			<LogoImg src={logo} alt="main logo"/>
		</a>
	)
}

export default Logo;
