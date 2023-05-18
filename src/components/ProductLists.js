import classes from './ProductLists.module.css';
import ProductList from './ProductList';

const ProductLists = (props) => {
  const { products, filter, visible, handleBookmark, handleModalChange } =
    props;

  return (
    <section className={classes.listsContainer}>
      <ul className={classes.lists}>
        {products
          .filter((item) => filter === null || item.type === filter)
          .slice(visible.start, visible.end)
          .map((item) => {
            return (
              <li key={item.id} className={classes.list}>
                <ProductList
                  item={item}
                  handleBookmark={handleBookmark}
                  handleModalChange={handleModalChange}
                />
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default ProductLists;
