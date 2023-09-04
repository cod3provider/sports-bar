import {AiOutlineTwitter, AiOutlineInstagram} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import {FooterList, FooterSocialItem, FooterSocialLink} from "./FooterSocialList.styled.js";

const FooterSocialList = () => {
	return (
		<FooterList>
			<FooterSocialItem>
				<FooterSocialLink to="https://twitter.com/" target="_blank">
					<AiOutlineTwitter color="7C7777" size={26} />
				</FooterSocialLink>
			</FooterSocialItem>

			<FooterSocialItem>
				<FooterSocialLink to="https://www.instagram.com/" target="_blank">
					<AiOutlineInstagram color="7C7777" size={26} />
				</FooterSocialLink>
			</FooterSocialItem>

			<FooterSocialItem>
				<FooterSocialLink to="https://web.telegram.org/" target="_blank">
					<BsTelegram  color="7C7777" size={26} />
				</FooterSocialLink>
			</FooterSocialItem>
		</FooterList>
	)
}

export default FooterSocialList;
