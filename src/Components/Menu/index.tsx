import React, { CSSProperties, useEffect, useState } from "react";
import { ReactNode } from "react";
import { MenuContainer, MenuToggleButton } from "./styles";


interface MenuProps {
	children: ReactNode;
	isCollapsed: boolean;
	bgColor?: string;
	toggleIcon: ReactNode;
	onClickToggle?(): void;
}

let lastScrollTop = 0;

export function Menu({ children, isCollapsed, bgColor, toggleIcon, onClickToggle }: MenuProps) {
  const [showMobileMenu, setShowMobileMenu] = useState<Boolean>(true);

  function controlMenu() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > 100 && currentScroll > lastScrollTop) {
      setShowMobileMenu(false)
    } else {
      setShowMobileMenu(true)
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  useEffect(() => {
    window.addEventListener('scroll', controlMenu)
    return () => {
      window.removeEventListener('scroll', controlMenu)
    }
  }, [])

	return (
		<MenuContainer collapsed={isCollapsed} bgColor={bgColor ?? 'grey'} bottom={showMobileMenu ? '0px' : '-80px'}>
			<MenuToggleButton bgColor={bgColor ?? 'grey'} onClick={onClickToggle}>{toggleIcon}</MenuToggleButton>
			{children}
		</MenuContainer>
	)
}