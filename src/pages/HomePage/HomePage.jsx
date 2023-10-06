import FindUs from '../../components/FindUs/FindUs';
import Hero from '../../components/Hero/Hero';
import { useMedia } from 'react-use';
import { MenuSection } from '../../components/MenuSection/MenuSection';

export const HomePage = () => {
  const tabletWindow = useMedia('(min-width: 768px');

  return (
    <>
      <Hero />
      <MenuSection />
      {tabletWindow && <FindUs />}
    </>
  );
};
