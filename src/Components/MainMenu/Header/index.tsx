import { ReactComponent as AvatarIcon } from '../../../assets/svg/avatar.svg';
import { ReactComponent as ArrowIcon } from '../../../assets/svg/chevron-down-new.svg';
import { ReactComponent as LogoExpanded } from '../../../assets/svg/logo-expanded-new.svg';
import { ReactComponent as LogoSmall } from '../../../assets/svg/logo-sm-new.svg';
import { ReactComponent as LogoutFilled } from '../../../assets/svg/logout-filled-new.svg';
import { ReactComponent as Logout } from '../../../assets/svg/logout-icon-new.svg';
import { ReactComponent as UserFilled } from '../../../assets/svg/user-filled-new.svg';
import { ReactComponent as User } from '../../../assets/svg/user-icon-new.svg';
import { Avatar, useMediaQuery } from '@chakra-ui/react';
import { Paragraph } from 'oxe-design';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './style.scss';
import { MobileHeader } from '../../MobileHeader';
import { Item } from '../Items';

interface MenuHeaderProps {
  user: any;
  isCollapsed: boolean;
  isOpenAccordeon: boolean;
  setIsCollapsed(value: boolean): void;
  setIsOpenAccordeon(value: boolean): void;
}

export function MenuHeader({
  user, isCollapsed, isOpenAccordeon, setIsCollapsed, setIsOpenAccordeon,
}: MenuHeaderProps) {
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const [isResponsive] = useMediaQuery('(max-width: 430px)');
  const dontShowAvatar = isResponsive && isCollapsed;
  const showMobileHeader = isResponsive && !isCollapsed;
  const navigate = useNavigate();

  const headerItems = [{
    label: "Perfil",
    icon: <User />,
    activeIcon: <UserFilled />,
    to: "/perfil",
    onClick: handleProfileClick,
    isActive: false,
  }, {
    label: "Sair",
    icon: <Logout />,
    activeIcon: <LogoutFilled />,
    to: "/logout",
    onClick: () => setOpenLogoutModal(prev => !prev),
    isActive: openLogoutModal,
  }];
  

  function handleClickUserImage() {
    if (isResponsive) {
      return;
    }
    setIsOpenAccordeon(!isOpenAccordeon)
  }

  function handleProfileClick() {
    if (isResponsive) {
      setIsOpenAccordeon(false)
      setIsCollapsed(true)
      navigate('/perfil')
    }

    navigate('/perfil')
  }

   function handleLogoClick() {
    setIsOpenAccordeon(false)
    setIsCollapsed(true)
    navigate('/')
  }

  function handleCloseMenu() {
    setIsOpenAccordeon(false)
    setIsCollapsed(true)
  }

  return (
    <div className={`${s['header-container']} ${isCollapsed ? s.center : ''} `}>
      {!isResponsive && (
        <button className={s['logo-container']} onClick={() => navigate('/')}>
          {isCollapsed ? (
            <LogoSmall />
          ) :
            (
              <LogoExpanded />
            )}
        </button>
      )}

      {(showMobileHeader) && (
        <MobileHeader withCloseIcon onClickIcon={handleCloseMenu} onClickLogo={handleLogoClick} />
      )}

      <div className={`${s['user-informations']} ${(dontShowAvatar) ? s.none : s.flex}`}>
        {!dontShowAvatar && (
          <Avatar
            onClick={handleClickUserImage}
            className={s.avatar}
            src={user?.photoUrl}
            icon={<AvatarIcon />}
            showBorder={false}
          />
        )}
        {!isCollapsed && (
          <button className={`${s['profile-text-container']} ${isCollapsed ? s.hidden : s.visible} ${s.animationFadeIn}`} onClick={() => setIsOpenAccordeon(!isOpenAccordeon)}>

            <div className={`${s['text-container']} ${s.animationFadeIn}`}>
              <Paragraph type="small-semibold" style={{ fontFamily: 'Inter, sans-serif' }} className={`${s['profile-text']} ${s.animationFadeIn}`}>
                Olá,{' '}{user?.name}
              </Paragraph>
            </div>

            <ArrowIcon className={isOpenAccordeon ? s['arrow-up'] : ''} />
          </button>
        )}
      </div>
      <div className={` ${s['header-container-items']} ${isOpenAccordeon ? s.visible : s.none} ${s.animationFadeIn}`}>
        {headerItems.map((item, index) => (
          <Item
            key={`${item.label}${index}`}
            label={item.label}
            icon={item.icon}
            activeIcon={item.activeIcon}
            to={item.to}
            collapsed={isCollapsed}
            onClick={item.onClick}
            itemsAlignment="row"
          />
        ))}
      </div>
    </div >

  );
}
