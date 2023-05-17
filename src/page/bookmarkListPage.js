import BookmarkFilter from '../components/BookmarkFilter';
import BookmarkLists from '../components/BookmarkLists';
import Modal from '../components/Modal';

const BookmarkListPage = (props) => {
  const {
    filter,
    handleFilterClick,
    products,
    visible,
    handleBookmark,
    handleModalOpen,
    bookmarked,
    setBookmarked,
    modal,
    handleModalClose,
    selectedItem,
  } = props;

  return (
    <>
      <BookmarkFilter filter={filter} handleFilterClick={handleFilterClick} />
      <BookmarkLists
        products={products}
        filter={filter}
        visible={visible}
        handleBookmark={handleBookmark}
        handleModalOpen={handleModalOpen}
        bookmarked={bookmarked}
        setBookmarked={setBookmarked}
      />
      <Modal
        modal={modal}
        handleModalClose={handleModalClose}
        selectedItem={selectedItem}
        handleBookmark={handleBookmark}
        bookmarked={bookmarked}
        setBookmarked={setBookmarked}
      />
    </>
  );
};

export default BookmarkListPage;
