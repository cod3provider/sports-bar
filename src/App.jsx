import './App.css';
import Header from './layout/Header/index.js';
import Main from './layout/Main/index.js';
import Footer from './layout/Footer/index.js';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
      </Main>
      <Footer />
    </>
  );
}

export default App;
