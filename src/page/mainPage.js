import { Link } from 'react-router-dom';
import classes from './mainPage.module.css';
import ProductList from '../components/ProductList';
import Modal from '../components/Modal';

const MainPage = (props) => {
  const {
    products,
    bookmarked,
    modal,
    selectedItem,
    handleBookmark,
    handleModalChange,
    handleFilterClick,
    setBookmarked,
  } = props;

  return (
    <>
      <section className={classes.wrapper}>
        <section className={classes.productLists}>
          <Link to="/products/list" className={classes.titleWrapper}>
            <p className={classes.title}>상품 리스트</p>
          </Link>
          <section className={classes.lists}>
            {products.slice(0, 4).map((item) => {
              return (
                <ul key={item.id}>
                  <li className={classes.list}>
                    <ProductList
                      item={item}
                      handleFilterClick={handleFilterClick}
                      handleBookmark={handleBookmark}
                      handleModalChange={handleModalChange}
                    />
                  </li>
                </ul>
              );
            })}
          </section>
        </section>
        <section className={classes.bookmarkList}>
          <Link to="/bookmark" className={classes.titleWrapper}>
            <p className={classes.title}>북마크 리스트</p>
          </Link>
          <section className={classes.lists}>
            {products
              .filter((item) => localStorage.getItem(item.id) !== null)
              .slice(0, 4)
              .map((item) => {
                return (
                  <ul key={item.id}>
                    <li className={classes.list}>
                      <ProductList
                        item={item}
                        handleFilterClick={handleFilterClick}
                        handleBookmark={handleBookmark}
                        handleModalChange={handleModalChange}
                      />
                    </li>
                  </ul>
                );
              })}
          </section>
        </section>
      </section>
      <Modal
        modal={modal}
        handleModalChange={handleModalChange}
        selectedItem={selectedItem}
        handleBookmark={handleBookmark}
        bookmarked={bookmarked}
        setBookmarked={setBookmarked}
      />
    </>
  );
};

export default MainPage;
