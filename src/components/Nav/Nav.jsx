import Logo from "../Logo/index.js";

import {BurgerButton, BurgerIcon, LinkNav, MobileMenu, NavList, StyledNav} from "./Nav.styled.js";
import {useEffect, useRef, useState} from "react";

const Nav = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const mobileMenuRef = useRef(null);

	const handleMobileMenuToggle = () => {
		setIsOpenMenu(!isOpenMenu);
	};

	useEffect(() => {
		const handleBackdropClick = e => {
			if (isOpenMenu &&
				mobileMenuRef.current &&
				!mobileMenuRef.current.contains(e.target)) {
				setIsOpenMenu(false);
			}
		}

		document.addEventListener('mousedown', handleBackdropClick);

		return () => {
			document.removeEventListener('mousedown', handleBackdropClick);
		}
	}, [isOpenMenu]);

	useEffect(() => {
		const handleScroll = () => {
			if (isOpenMenu) {
				setIsOpenMenu(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};

	}, [isOpenMenu]);


	return (
		<StyledNav>
			<Logo/>
			<BurgerButton onClick={handleMobileMenuToggle}>
				<BurgerIcon/>
			</BurgerButton>
			<MobileMenu className={isOpenMenu ? 'open' : ''} ref={mobileMenuRef}>
				<NavList>
					<li>
						<LinkNav href="">Home</LinkNav>
					</li>

					<li>
						<LinkNav href="">Menu</LinkNav>
					</li>

					<li>
						<LinkNav href="">Events</LinkNav>
					</li>

					<li>
						<LinkNav href="">About</LinkNav>
					</li>

					<li>
						<LinkNav href="">Gallery</LinkNav>
					</li>

					<li>
						<LinkNav href="">Find us</LinkNav>
					</li>
				</NavList>
			</MobileMenu>
		</StyledNav>
	)
}

export default Nav;
