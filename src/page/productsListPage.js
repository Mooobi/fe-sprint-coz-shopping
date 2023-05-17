import ProductFilter from '../components/ProductFilter';
import ProductLists from '../components/ProductLists';
import Modal from '../components/Modal';

const ProductsListPage = (props) => {
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
      <ProductFilter filter={filter} handleFilterClick={handleFilterClick} />
      <ProductLists
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

export default ProductsListPage;