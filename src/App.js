import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainPage from './page/mainPage';
import ProductsListPage from './page/productsListPage';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bookmarkOff from './icon/bookmark - off.png';
import bookmarkOn from './icon/bookmark - on.png';
import BookmarkListPage from './page/bookmarkListPage';

function App() {
  const [products, setProducts] = useState([]);

  const [filter, setFilter] = useState(null);

  const [visible, setVisible] = useState({ start: 0, end: 16 });

  const [modal, setModal] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  const [bookmarked, setBookmarked] = useState([]);

  const [scrollTop, setScrollTop] = useState(0);

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

    setScrollTop(scrollTop);
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

  const CustomToast = ({ message, imageSrc }) => {
    return (
      <div>
        <img src={imageSrc} alt="toast" />
        <span>{message}</span>
      </div>
    );
  };

  const handleBookmark = (itemId) => {
    if (bookmarked.includes(itemId)) {
      setBookmarked(bookmarked.filter((id) => id !== itemId));
      toast(
        <CustomToast
          message="상품이 북마크에서 제거되었습니다."
          imageSrc={bookmarkOff}
        />
      );
    } else {
      setBookmarked([...bookmarked, itemId]);
      toast(
        <CustomToast
          message="상품이 북마크에 추가되었습니다."
          imageSrc={bookmarkOn}
        />
      );
    }
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MainPage
              filter={filter}
              handleFilterClick={handleFilterClick}
              products={products}
              handleBookmark={handleBookmark}
              handleModalOpen={handleModalOpen}
              bookmarked={bookmarked}
              setBookmarked={setBookmarked}
              modal={modal}
              handleModalClose={handleModalClose}
              selectedItem={selectedItem}
            />
          }
        />
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
              bookmarked={bookmarked}
              setBookmarked={setBookmarked}
              modal={modal}
              handleModalClose={handleModalClose}
              selectedItem={selectedItem}
            />
          }
        />
        <Route
          exact
          path="/bookmark"
          element={
            <BookmarkListPage
              filter={filter}
              handleFilterClick={handleFilterClick}
              products={products}
              visible={visible}
              handleBookmark={handleBookmark}
              handleModalOpen={handleModalOpen}
              bookmarked={bookmarked}
              setBookmarked={setBookmarked}
              modal={modal}
              handleModalClose={handleModalClose}
              selectedItem={selectedItem}
            />
          }
        />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        pauseOnFocusLoss={false}
        hideProgressBar={true}
        closeButton={false}
        transition={Slide}
      />
      <Footer />
    </>
  );
}

export default App;
