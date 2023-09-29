/**
 *
 * Header
 *
 */
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
// import { messages } from './messages';
import { NavLink as Link } from 'react-router-dom';
import { Hamburger, Menu, MenuLink, PrimaryNav } from './styled';

interface Props {}

export const Header = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <PrimaryNav>
      <Hamburger />
      <Menu>
        <MenuLink to="/home">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/contact">Contact</MenuLink>
      </Menu>
    </PrimaryNav>
  );
});
