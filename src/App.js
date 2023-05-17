import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import MainPage from './page/mainPage';
import Footer from './components/Footer';
import ProductsListPage from './page/productsListPage';
import BookmarkListPage from './page/bookmarkListPage';
import bookmarkOn from './icon/bookmark - on.png';
import bookmarkOff from './icon/bookmark - off.png';

function App() {
  const [products, setProducts] = useState([]);
  // 데이터가 들어오는 배열

  const [filter, setFilter] = useState(null);
  // 상품리스트페이지, 북마크리스트페이지에서 카테고리 필터링할 때 프로덕트의 타입을 저장

  const [visible, setVisible] = useState({ start: 0, end: 16 });
  // 첫 렌더 시 보이는 아이템의 갯수. handleScroll을 통해 무한스크롤 구현

  const [modal, setModal] = useState(false);
  // 모달의 상태. handleModal을 통해 true, false로 열고 닫힘 제어

  const [selectedItem, setSelectedItem] = useState(null);
  // 모달 시 해당하는 아이템을 특정하기 위한 상태

  const [bookmarked, setBookmarked] = useState([]);
  // 북마크 버튼, 토스트에서 사용.

  useEffect(() => {
    fetch('http://cozshopping.codestates-seb.link/api/v1/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  // 마운트 시 api에서 데이터를 받아옴

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (
      scrollTop + clientHeight >= scrollHeight &&
      visible.end < products.length
    ) {
      setVisible((prevState) => ({
        start: prevState.start,
        end: prevState.end + 16,
      }));
    }
  };
  // 스크롤이 바닥에 닿았을 때 visible 배열의 상태를 변경해서 아이템 추가 렌더링

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  // 스크롤 이벤트 발생 시 이벤트리스너 등록, 컴포넌트 언마운트 시 해당 이벤트 제거

  const handleFilterClick = (type) => {
    setFilter(type);
    setVisible({ start: 0, end: 16 });
  };
  // filter의 상태 아이템 타입으로 변경, visible의 상태를 초기화

  const handleModalChange = (item) => {
    if (modal) {
      setModal(false);
    } else if (!modal) {
      setSelectedItem(item);
      setModal(true);
    }
  };
  // 모달의 상태를 변경하는 핸들러. 모달이 켜질때의 아이템을 selectedItem에 저장하고 해당 아이템의 정보를 띄움

  const CustomToast = ({ message, imageSrc }) => {
    return (
      <div className="toast">
        <img src={imageSrc} alt="toast" className="mark" />
        <span className="message">{message}</span>
      </div>
    );
  };
  // 토스트 라이브러리의 CustomToast

  const handleBookmark = (itemId) => {
    const isBookmarked = localStorage.getItem(itemId);
    if (isBookmarked) {
      setBookmarked(bookmarked.filter((id) => id !== itemId));
      localStorage.removeItem(itemId);
      toast(
        <CustomToast
          message="상품이 북마크에서 제거되었습니다."
          imageSrc={bookmarkOff}
        />
      );
    } else {
      setBookmarked([...bookmarked, itemId]);
      localStorage.setItem(itemId, JSON.stringify(itemId));
      toast(
        <CustomToast
          message="상품이 북마크에 추가되었습니다."
          imageSrc={bookmarkOn}
        />
      );
    }
  };
  // 아이템의 아이디가 북마크 배열에 있으면 해당 아이템을 삭제, 없으면 추가 및 그에 따른 알림토스트 구현

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              products={products}
              bookmarked={bookmarked}
              modal={modal}
              selectedItem={selectedItem}
              handleBookmark={handleBookmark}
              handleModalChange={handleModalChange}
              handleFilterClick={handleFilterClick}
              setBookmarked={setBookmarked}
            />
          }
        />
        <Route
          path="/products/list"
          element={
            <ProductsListPage
              products={products}
              filter={filter}
              visible={visible}
              bookmarked={bookmarked}
              selectedItem={selectedItem}
              modal={modal}
              handleFilterClick={handleFilterClick}
              handleBookmark={handleBookmark}
              handleModalChange={handleModalChange}
              setBookmarked={setBookmarked}
            />
          }
        />
        <Route
          path="/bookmark"
          element={
            <BookmarkListPage
              products={products}
              filter={filter}
              visible={visible}
              bookmarked={bookmarked}
              selectedItem={selectedItem}
              modal={modal}
              handleFilterClick={handleFilterClick}
              handleBookmark={handleBookmark}
              handleModalChange={handleModalChange}
              setBookmarked={setBookmarked}
            />
          }
        />
      </Routes>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        pauseOnFocusLoss={false}
        hideProgressBar={true}
        closeButton={false}
        transition={Slide}
      />
    </>
  );
}

export default App;
