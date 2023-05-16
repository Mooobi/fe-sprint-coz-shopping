import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductsList from './page/productsList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/products/list" element={<ProductsList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
