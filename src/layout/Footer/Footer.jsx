import {
	FooterDeskTextWrap,
	FooterText,
	FooterTextAddress,
	MobileLogoWrap, FooterContainer
} from "./Footer.styled.js";
import Logo from "../../components/common/Logo/index.js";
import SubscribeForm from "../../components/common/SubscribeForm/index.js";
import {useMedia} from "react-use";
import {FooterListWrap} from "./FooterSocialList/FooterSocialList.styled.js";
import FooterSocialList from "./FooterSocialList/index.js";

import { BiMobileAlt } from 'react-icons/bi';
// import {Container} from "../../components/Container/Container.styled.js";

const Footer = () => {
	const mobileWindow = useMedia('(max-width: 767.98px)');
	const tabletWindow = useMedia('(min-width: 768px');

	return (
		<footer>
			<FooterContainer>
				{mobileWindow && (
					<MobileLogoWrap>
						<Logo />
						<FooterTextAddress>Wilhelmstr. 38(Marktplatz) 65183 Wiesbaden</FooterTextAddress>
						<FooterText>+49 (611) 91 01 201</FooterText>
					</MobileLogoWrap>
				)}

				{tabletWindow && (
					<Logo />
				)}

				<FooterListWrap>
					{mobileWindow && (
						<FooterText>Follow us</FooterText>
					)}
					<FooterSocialList />
				</FooterListWrap>

				{mobileWindow && (
					<SubscribeForm />
				)}

				{tabletWindow && (
					<FooterDeskTextWrap>
						<BiMobileAlt color='#7C7777' size={24} />
						<FooterText>
							+49 (611) 91 01 201
						</FooterText>
					</FooterDeskTextWrap>
				)}
			</FooterContainer>

		</footer>
	)
}

export default Footer;
