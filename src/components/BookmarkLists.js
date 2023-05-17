import ProductList from './ProductList';
import classes from './ProductLists.module.css';

const BookmarkLists = (props) => {
  const {
    products,
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
          .filter((item) => bookmarked.includes(item.id))
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

export default BookmarkLists;
