import { ReactComponent as ToggleCollapsed } from '../../assets/svg/toggle-collapsed-new.svg';
import { ReactComponent as ToggleExpanded } from '../../assets/svg/toggle-expanded-new.svg';
import { ReactComponent as Home } from '../../assets/svg/home-icon-new.svg';
import { ReactComponent as HomeFilled } from '../../assets/svg/home-icon-filled-new.svg';
import { ReactComponent as Career } from '../../assets/svg/career-icon-new.svg';
import { ReactComponent as CareerFilled } from '../../assets/svg/career-filled-new.svg';
import { ReactComponent as Dots } from '../../assets/svg/horizontal-dots-icon-new.svg';
import { useEffect, useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { useMatch, useParams } from "react-router-dom";
import s from './style.scss'
import { MenuHeader } from "../../Components/MainMenu/Header";
import { Item } from "../../Components/MainMenu/Items";
import { Menu } from '@components/Menu';

export interface AuthResponse {
    id: string;
    email: string;
    phone: string;
    username: string;
    name: string;
    accessToken: string;
    refreshToken: string;
  }
  

export function MenuContainer() {
  const [isResponsive] = useMediaQuery('(max-width: 430px)');
  const { classId } = useParams<{ classId: string }>();
  const [isOpenAccordeon, setIsOpenAccordeon] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const galleryPage = useMatch('/');
  const profilePage = useMatch('/perfil');
  const pselPage = useMatch('/sucesso-compartilhado/:pselid')
  const dontShowCareerItem = Boolean(galleryPage || profilePage || pselPage);
  const hiddeMenuItems = isResponsive && !isCollapsed;

  const user: AuthResponse = {
    id: '12345878',
    email: 'email@mail.com',
    phone: '5555-5655',
    username: 'luisa.spinola',
    name: 'Luisa Spinola',
    accessToken: 'uagushidji',
    refreshToken: '687de4d8a7sd45',
  }

  useEffect(() => {
    const body = document.querySelector("body");

    if (hiddeMenuItems) {
      body!.style.overflow = "hidden";
    } else {
      body!.style.overflow = "auto"
    }

  }, [isCollapsed])

  useEffect(() => {
    if (isResponsive) {
      setIsCollapsed(true)
      setIsOpenAccordeon(false)
    }
  }, [isResponsive])

  const menuItemsArray = [
    { icon: <Home />, activeIcon: <HomeFilled />, label: "Início", to: "/" },
    { icon: <Career />, activeIcon: <CareerFilled />, label: "Carreira", to: `/` },
    { icon: <Dots />, label: "Mais", to: `/mais`, onClick: () => setIsCollapsed(false) },
  ]

  return (
    <Menu
      isCollapsed={isCollapsed}
      toggleIcon={isCollapsed ? <ToggleExpanded className={s.pointer} /> : <ToggleCollapsed className={s.pointer} />}
      onClickToggle={() => setIsCollapsed(prev => !prev)}
    >
      <MenuHeader
        isCollapsed={isCollapsed}
        isOpenAccordeon={isOpenAccordeon}
        setIsCollapsed={setIsCollapsed}
        setIsOpenAccordeon={setIsOpenAccordeon}
        user={user}
      />

      <div className={`${s.containerItems} ${hiddeMenuItems ? s.hidden : s.visible}`}>
        {menuItemsArray.map((item, index) => {
          if (item.label === 'Carreira' && dontShowCareerItem) return;
          if (item.label === 'Mais' && !isResponsive) return;
          return (
            <Item
              key={`${item.label}${index}`}
              icon={item.icon}
              activeIcon={item.activeIcon}
              label={item.label}
              to={item.to}
              onClick={item.onClick}
              collapsed={isCollapsed}
              positionBottom={isResponsive}
              itemsAlignment={isResponsive ? "column" : "row"}
            />
          )
        })}
      </div>
    </Menu>
  )
}
