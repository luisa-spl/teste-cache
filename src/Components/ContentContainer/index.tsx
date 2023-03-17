import { ReactNode } from 'react';
import s from './style.scss';

interface ContentContainerProps {
  children: ReactNode;
  padding?: string;
}

export function ContentContainer({ children, padding }: ContentContainerProps) {
  return (
    <div className={s.container} style={{ padding: padding ? padding : '24px 32px 24px 32px' }}>
      {children}
    </div>
  )
}

// When we start using DS grids on pages, this component can be deleted
