import './App.css';
import Header from './layout/Header/index.js';
import Main from './layout/Main/index.js';
import Footer from './layout/Footer/index.js';
import {Menu} from './components/Menu/Menu';
import Hero from "./components/Hero/Hero.jsx";

function App() {
	return (
		<>
			<Header/>
			<Main>
				<Hero/>
				<Menu/>
			</Main>
			<Footer/>
		</>
	);
}

export default App;
