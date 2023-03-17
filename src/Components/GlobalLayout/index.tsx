import { useMediaQuery } from '@chakra-ui/react';
import { ContentContainer } from '../ContentContainer';
import { ContentSafeArea } from '../Layout/ContentSafeArea';
import { TabBar } from '../Layout/TabBar';
import { MobileHeader } from '../MobileHeader';
import { MenuContainer } from '../../Containers/MenuContainer';
import { useNavigate } from 'react-router';
import { Layout } from '../Layout';

interface GlobalLayoutProps {
  children: React.ReactNode;
  padding?: string;
}

export function GlobalLayout({ children, padding }: GlobalLayoutProps) {
  const [isResponsive] = useMediaQuery('(max-width: 430px)');
  const navigate = useNavigate();

  return (
    <Layout>
      <TabBar>
        <MenuContainer />
      </TabBar>
      <ContentSafeArea>
        {isResponsive && (
          <MobileHeader onClickLogo={() => navigate('/')} />
        )}
        <ContentContainer padding={padding}>
          {children}
        </ContentContainer>
      </ContentSafeArea>
    </Layout>
  );
}
