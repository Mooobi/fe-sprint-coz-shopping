import classes from './ProductLists.module.css';
import ProductList from './ProductList';

const ProductLists = (props) => {
  const {
    products,
    filter,
    visible,
    handleBookmark,
    handleModalOpen,
    bookmarked,
    setBookmarked,
  } = props;

  return (
    <section className={classes.listsContainer}>
      <section className={classes.lists}>
        {products
          .filter((item) => filter === null || item.type === filter)
          .slice(visible.start, visible.end)
          .map((item) => {
            return (
              <ul key={item.id}>
                <li className={classes.list}>
                  <ProductList
                    item={item}
                    handleBookmark={handleBookmark}
                    handleModalOpen={handleModalOpen}
                    bookmarked={bookmarked}
                    setBookmarked={setBookmarked}
                  />
                </li>
              </ul>
            );
          })}
      </section>
    </section>
  );
};

export default ProductLists;
