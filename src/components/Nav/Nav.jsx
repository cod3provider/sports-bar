import Logo from '../common/Logo/index.js';

import {
  BurgerButton,
  BurgerIcon,
  LinkNav,
  MobileLinkNav,
  MobileMenu,
  MobileNavList,
  NavList,
  StyledNav,
} from './Nav.styled.js';
import { useEffect, useRef, useState } from 'react';
import { useMedia } from 'react-use';

const Nav = () => {
  const mobileWindow = useMedia('(max-width: 767.98px)');
  const fromTabletWindow = useMedia('(min-width: 768px');

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const mobileMenuRef = useRef(null);

  const handleMobileMenuToggle = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  useEffect(() => {
    const handleBackdropClick = e => {
      if (
        isOpenMenu &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        setIsOpenMenu(false);
      }
    };

    document.addEventListener('mousedown', handleBackdropClick);

    return () => {
      document.removeEventListener('mousedown', handleBackdropClick);
    };
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
      <Logo />

      {mobileWindow && (
        <BurgerButton onClick={handleMobileMenuToggle}>
          <BurgerIcon />
        </BurgerButton>
      )}

      {fromTabletWindow && (
        <NavList>
          <li>
            <LinkNav to="/">Home</LinkNav>
          </li>

          <li>
            <LinkNav to="menu">Menu</LinkNav>
          </li>

          <li>
            <LinkNav to="">Events</LinkNav>
          </li>

          <li>
            <LinkNav to="">About</LinkNav>
          </li>

          <li>
            <LinkNav to="">Gallery</LinkNav>
          </li>

          <li>
            <LinkNav to="">Find us</LinkNav>
          </li>
        </NavList>
      )}

      <MobileMenu className={isOpenMenu ? 'open' : ''} ref={mobileMenuRef}>
        <MobileNavList>
          <li>
            <MobileLinkNav to="/">Home</MobileLinkNav>
          </li>

          <li>
            <MobileLinkNav to="/menu">Menu</MobileLinkNav>
          </li>

          <li>
            <MobileLinkNav to="">Events</MobileLinkNav>
          </li>

          <li>
            <MobileLinkNav to="">About</MobileLinkNav>
          </li>

          <li>
            <MobileLinkNav to="">Gallery</MobileLinkNav>
          </li>

          <li>
            <MobileLinkNav to="">Find us</MobileLinkNav>
          </li>
        </MobileNavList>
      </MobileMenu>
    </StyledNav>
  );
};

export default Nav;
