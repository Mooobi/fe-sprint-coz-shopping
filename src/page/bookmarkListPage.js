import ProductFilter from '../components/ProductFilter';
import BookmarkLists from '../components/BookmarkLists';
import classes from './bookmarkListPage.module.css';

const BookmarkListPage = (props) => {
  const {
    products,
    filter,
    visible,
    bookmarked,
    handleFilterClick,
    handleBookmark,
    handleModalChange,
    setBookmarked,
  } = props;

  return (
    <div className={classes.wrapper}>
      <ProductFilter filter={filter} handleFilterClick={handleFilterClick} />
      <BookmarkLists
        products={products}
        filter={filter}
        visible={visible}
        handleBookmark={handleBookmark}
        handleModalChange={handleModalChange}
        bookmarked={bookmarked}
        setBookmarked={setBookmarked}
      />
    </div>
  );
};

export default BookmarkListPage;
