import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductsListPage from './page/productsListPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  const [filter, setFilter] = useState(null);

  const [visible, setVisible] = useState({ start: 0, end: 16 });

  const [modal, setModal] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  const [bookmarked, setBookmarked] = useState([]);

  const [onToast, setOnToast] = useState(null);

  const [offToast, setOffToast] = useState(null);

  useEffect(() => {
    fetch('http://cozshopping.codestates-seb.link/api/v1/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const handleFilterClick = (type) => {
    setFilter(type);
    setVisible({ start: 0, end: 16 });
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (
      scrollTop + clientHeight >= scrollHeight &&
      visible.end < products.length
    ) {
      setVisible((prevState) => ({
        start: prevState.start,
        end: prevState.end + 20,
      }));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const handleModalOpen = (item) => {
    handleSelectItem(item);
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  const handleBookmark = (itemId) => {
    if (bookmarked.includes(itemId)) {
      setBookmarked(bookmarked.filter((id) => id !== itemId));
    } else {
      setBookmarked([...bookmarked, itemId]);
    }
  };

  const handleOpenOnToast = () => {
    setOnToast(true);
  };

  const handleCloseOnToast = () => {
    setOnToast(false);
  };

  const handleOpenOffToast = () => {
    setOffToast(true);
  };

  const handleCloseOffToast = () => {
    setOffToast(false);
  };

  useEffect(() => {
    let timer;
    if (onToast) {
      timer = setTimeout(() => {
        handleCloseOnToast();
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [onToast]);

  useEffect(() => {
    let timer;
    if (offToast) {
      timer = setTimeout(() => {
        handleCloseOffToast();
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [offToast]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          exact
          path="/products/list"
          element={
            <ProductsListPage
              filter={filter}
              handleFilterClick={handleFilterClick}
              products={products}
              visible={visible}
              handleBookmark={handleBookmark}
              handleModalOpen={handleModalOpen}
              handleOpenOnToast={handleOpenOnToast}
              handleCloseOnToast={handleCloseOnToast}
              handleOpenOffToast={handleOpenOffToast}
              handleCloseOffToast={handleCloseOffToast}
              bookmarked={bookmarked}
              setBookmarked={setBookmarked}
              modal={modal}
              handleModalClose={handleModalClose}
              selectedItem={selectedItem}
              onToast={onToast}
              offToast={offToast}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
