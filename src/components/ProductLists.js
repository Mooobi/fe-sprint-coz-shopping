import classes from './ProductLists.module.css';
import ProductList from './ProductList';

const ProductLists = (props) => {
  return (
    <section className={classes.listsContainer}>
      <section className={classes.lists}>
        {props.products
          .filter((item) => props.filter === null || item.type === props.filter)
          .slice(props.visible.start, props.visible.end)
          .map((item) => {
            return (
              <ul key={item.id}>
                <li className={classes.list}>
                  <ProductList
                    item={item}
                    handleBookmark={props.handleBookmark}
                    handleModalOpen={props.handleModalOpen}
                    handleOpenOnToast={props.handleOpenOnToast}
                    handleCloseOnToast={props.handleCloseOnToast}
                    handleOpenOffToast={props.handleOpenOffToast}
                    handleCloseOffToast={props.handleCloseOffToast}
                    bookmarked={props.bookmarked}
                    setBookmarked={props.setBookmarked}
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
