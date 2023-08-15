import './App.css';
import Header from './layout/Header/index.js';
import Main from './layout/Main/index.js';
import Footer from './layout/Footer/index.js';
import { Menu } from './components/Menu/Menu';

function App() {
  return (
    <>
      {/* <Header/>
			<Main> */}
      <Menu />
      {/* </Main>
			<Footer/> */}
    </>
  );
}

export default App;
