import ProductFilter from '../components/ProductFilter';
import BookmarkLists from '../components/BookmarkLists';
import Modal from '../components/Modal';
import classes from './mainPage.module.css';

const BookmarkListPage = (props) => {
  const {
    products,
    filter,
    visible,
    bookmarked,
    selectedItem,
    modal,
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
      <Modal
        modal={modal}
        handleModalChange={handleModalChange}
        selectedItem={selectedItem}
        handleBookmark={handleBookmark}
        bookmarked={bookmarked}
        setBookmarked={setBookmarked}
      />
    </div>
  );
};

export default BookmarkListPage;
