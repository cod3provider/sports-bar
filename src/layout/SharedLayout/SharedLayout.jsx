import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};
