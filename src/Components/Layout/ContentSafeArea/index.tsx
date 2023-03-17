import React, { ReactNode } from 'react';
import { LayoutContentSafeArea } from './styles';

interface ContentSafeAreaProps {
  children: ReactNode;
}

export function ContentSafeArea({ children }: ContentSafeAreaProps) {
  return (
    <LayoutContentSafeArea id="contentSafeArea">{ children }</LayoutContentSafeArea>
  );
}