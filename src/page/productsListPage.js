import ProductFilter from '../components/ProductFilter';
import ProductLists from '../components/ProductLists';

const ProductsListPage = (props) => {
  const {
    products,
    filter,
    visible,
    handleFilterClick,
    handleBookmark,
    handleModalChange,
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
    </>
  );
};

export default ProductsListPage;
