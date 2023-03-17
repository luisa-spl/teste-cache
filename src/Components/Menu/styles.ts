import { ReactNode } from 'react';
import styled from 'styled-components';

interface MenuProps {
		collapsed: boolean;
		bgColor: string;
		bottom: string;
}
  
export const MenuContainer = styled.div<MenuProps>`
		display: flex; 
		flex-direction: column;
		padding-top: 28px;
		height: 100vh;
		width: ${(props) => props.collapsed ? '80px' : '240px'};
    	transition: width 130ms ease-in-out;
		background-color: ${(props) => props.bgColor};
		border-right: 1px solid grey;
		position: sticky;
		top: 0px;
		z-index: 5;

		@media only screen and (max-width: 430px) {
			height: ${(props) => props.collapsed ? '64px' : '100%'};
			width: 100%;
			padding: 0px;
			background-color: ${(props) => props.bgColor};
			border-bottom: 1px solid pink;
			border-right: none;
			transition: height 0.2s ease-in-out;
			transition-timing-function: ease-in-out;
			transition: 0.6s;
			position: fixed;
			top: unset;
			bottom: ${(props) => props.bottom};
			z-index: 5;
		}
`;

interface ToggleButtonProps {
		children: ReactNode;
		bgColor: string;
}

export const MenuToggleButton = styled.div<ToggleButtonProps>`
		display: flex; 
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 32px;
		height: 32px;
		border-radius: 4px;
		background-color: ${(props) => props.bgColor};
		position: absolute;
		z-index: 2;
		top: 28px;
		right: -8px;

	@media only screen and (max-width: 430px) {
		display: none;
	}
`