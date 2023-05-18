import { Link } from 'react-router-dom';
import classes from './mainPage.module.css';
import ProductList from '../components/ProductList';

const MainPage = (props) => {
  const { products, handleBookmark, handleModalChange, handleFilterClick } =
    props;

  const renderProductList = (list) => {
    return list.map((item) => (
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
    ));
  };

  const productList = products.slice(0, 4);
  const bookmarkedList = products
    .filter((item) => localStorage.getItem(item.id) !== null)
    .slice(0, 4);

  return (
    <section className={classes.wrapper}>
      <section className={classes.productLists}>
        <Link to="/products/list" className={classes.titleWrapper}>
          <p className={classes.title}>상품 리스트</p>
        </Link>
        <section className={classes.lists}>
          {renderProductList(productList)}
        </section>
      </section>
      <section className={classes.bookmarkList}>
        <Link to="/bookmark" className={classes.titleWrapper}>
          <p className={classes.title}>북마크 리스트</p>
        </Link>
        <section className={classes.lists}>
          {renderProductList(bookmarkedList)}
        </section>
      </section>
    </section>
  );
};

export default MainPage;
