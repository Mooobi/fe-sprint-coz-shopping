import ProductFilter from '../components/ProductFilter';
import ProductLists from '../components/ProductLists';
import Modal from '../components/Modal';
import Toast from '../components/Toast';

const ProductsListPage = (props) => {
  const {
    filter,
    handleFilterClick,
    products,
    visible,
    handleBookmark,
    handleModalOpen,
    handleOpenOnToast,
    handleCloseOnToast,
    handleOpenOffToast,
    handleCloseOffToast,
    bookmarked,
    setBookmarked,
    modal,
    handleModalClose,
    selectedItem,
    onToast,
    offToast,
  } = props;

  return (
    <>
      <ProductFilter filter={filter} handleFilterClick={handleFilterClick} />
      <ProductLists
        products={products}
        filter={filter}
        visible={visible}
        handleBookmark={handleBookmark}
        handleModalOpen={handleModalOpen}
        handleOpenOnToast={handleOpenOnToast}
        handleCloseOnToast={handleCloseOnToast}
        handleOpenOffToast={handleOpenOffToast}
        handleCloseOffToast={handleCloseOffToast}
        bookmarked={bookmarked}
        setBookmarked={setBookmarked}
      />
      <Modal
        modal={modal}
        handleModalClose={handleModalClose}
        selectedItem={selectedItem}
        handleBookmark={handleBookmark}
        handleOpenOnToast={handleOpenOnToast}
        handleOpenOffToast={handleOpenOffToast}
        bookmarked={bookmarked}
        setBookmarked={setBookmarked}
      />
      <Toast onToast={onToast} offToast={offToast} />
    </>
  );
};

export default ProductsListPage;
