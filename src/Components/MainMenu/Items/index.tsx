import { useMatch, useNavigate } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import { Utility } from "oxe-design";
import s from './style.scss';
import { ActiveIndicator } from "../../ActiveIndicator";

interface IMenuItemProps {
  label: string;
  icon: React.ReactNode;
  to: string;
  collapsed?: boolean;
  onClick?(): void;
  positionBottom?: boolean;
  isActive?: boolean;
  itemsAlignment: 'row' | 'column';
  activeIcon?: React.ReactNode;
}

export function Item({ label, icon, to, collapsed = false, onClick, positionBottom, isActive, itemsAlignment, activeIcon }: IMenuItemProps) {
  const match = useMatch(to);
  const navigate = useNavigate();
  const [isResponsive] = useMediaQuery('(max-width: 430px)');

  function handleClick() {
    if (onClick) {
      onClick();
      return
    }

    if (to) {
      navigate(to);
    }
  }

  function renderIcon() {
    if (match || isActive) {
      if (activeIcon) return activeIcon;
    }

    return icon;
  }

  return (
    <button className={s['menu-item']} onClick={handleClick}>
      <div className={`${!isResponsive ? s.margin : ''}`}>
        {renderIcon()}
      </div>
      <Utility
        type={isResponsive ? "primary-medium-small" : "primary-medium-regular"}
        className={`${s['menu-text']} ${collapsed && !isResponsive ? s.hidden : s.visible} ${(match || isActive) ? '' : s.hover}`}
      >
        {label}
      </Utility>
      {(match || isActive)
        && (
          <ActiveIndicator
            className={`${s.animationFadeIn} ${s.indicator} ${(match || isActive) ? '' : s.indicatorHover}`}
            backgroundColor="#D818A5"
            position="absolute"
            left={positionBottom ? "" : "0"}
            bottom={positionBottom ? "0px" : ""}
            width={positionBottom ? "48px" : "3px"}
            height={positionBottom ? "3px" : "48px"}
            borderRadius={positionBottom ? "100px 100px 0px 0px" : "0px 100px 100px 0px"}
          />
        )}
    </button>
  )
}

