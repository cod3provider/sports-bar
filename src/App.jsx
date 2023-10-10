import './App.css';

import { OrderPages } from './pages/OrderPages/OrderPages';
import { Menu } from './components/Menu/Menu';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { SharedLayout } from './layout/SharedLayout/SharedLayout';

function App() {
  // const tabletWindow = useMedia('(min-width: 768px');

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="orderPage" element={<OrderPages />} />
          <Route path="menu" element={<Menu />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
