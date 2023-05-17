import ProductList from './ProductList';
import classes from './ProductLists.module.css';

const BookmarkLists = (props) => {
  const {
    products,
    filter,
    visible,
    handleBookmark,
    handleModalChange,
    bookmarked,
    setBookmarked,
  } = props;

  return (
    <section className={classes.listsContainer}>
      <section className={classes.lists}>
        {products
          .filter((item) => localStorage.getItem(item.id) !== null)
          .filter((item) => filter === null || item.type === filter)
          .slice(visible.start, visible.end)
          .map((item) => {
            return (
              <ul key={item.id}>
                <li className={classes.list}>
                  <ProductList
                    item={item}
                    handleBookmark={handleBookmark}
                    handleModalChange={handleModalChange}
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

export default BookmarkLists;
