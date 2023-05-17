import ProductFilter from '../components/ProductFilter';
import ProductLists from '../components/ProductLists';
import Modal from '../components/Modal';

const ProductsListPage = (props) => {
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
    <>
      <ProductFilter filter={filter} handleFilterClick={handleFilterClick} />
      <ProductLists
        products={products}
        filter={filter}
        visible={visible}
        handleBookmark={handleBookmark}
        handleModalChange={handleModalChange}
      />
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

export default ProductsListPage;
