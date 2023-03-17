import React, { ReactNode } from 'react';
import { LayoutTabBar } from './styles';

interface TabBarProps {
  children: ReactNode;
}
export function TabBar({  children }: TabBarProps) {
  return (
    <LayoutTabBar id="tabBar">{ children }</LayoutTabBar>
  );
}