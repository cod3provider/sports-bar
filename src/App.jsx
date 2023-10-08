import './App.css';
import Header from './layout/Header/index.js';
import Main from './layout/Main/index.js';
import Footer from './layout/Footer/index.js';
import { OrderPages } from './pages/OrderPages/OrderPages';
import {Menu} from './components/Menu/Menu';
import  {Gallary}  from './components/Gallary/Gallary.jsx';
// import Hero from "./components/Hero/Hero.jsx";
// import FindUs from "./components/FindUs/index.js";

function App() {
  return (
    <>
      <Header />
      <Main>
        {/* <Hero /> */}
        {/* <div style={'display:flex;'}> */}
        <OrderPages />
        <Menu />
        {/* </div> */}
      </Main>
        <Gallary/>
			<Footer/>
    </>
  );
}

export default App;
67
