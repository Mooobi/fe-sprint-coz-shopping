import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dummy from './Dummy';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Dummy />
      <Footer />
    </>
  );
}

export default App;
