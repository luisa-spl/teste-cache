import { ReactComponent as LogoExpanded } from '../../assets/svg/logo-expanded-new.svg';
import { ReactComponent as CloseIcon } from '../../assets/svg/close-icon-new.svg';
import s from './style.scss';
import { useEffect, useState } from 'react';

interface MobileHeaderProps {
  withCloseIcon?: boolean;
  onClickIcon?(): void;
  onClickLogo(): void;
}

let lastScrollTop = 0;

export function MobileHeader({ withCloseIcon, onClickIcon, onClickLogo }: MobileHeaderProps) {
  const [showMobileHeader, setShowMobileHeader] = useState(true);

  function controlHeader() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > 100 && currentScroll > lastScrollTop) {
      setShowMobileHeader(false)
    } else {
      setShowMobileHeader(true)
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  useEffect(() => {
    window.addEventListener('scroll', controlHeader)
    return () => {
      window.removeEventListener('scroll', controlHeader)
    }
  }, [])

  return (
    <div className={s.header} style={{ top: showMobileHeader ? '0px' : '-80px' }}>
      <LogoExpanded className={s.logo} onClick={onClickLogo} />
      {withCloseIcon && (
        <button onClick={onClickIcon} className={s.closeButton}>
          <CloseIcon />
        </button>
      )}
    </div>
  )
}
