import classes from './Modal.module.css';
import closeButton from '../icon/closeButton.png';
import bookmarkOn from '../icon/bookmark - on.png';
import bookmarkOff from '../icon/bookmark - off.png';

const Modal = (props) => {
  const { modal, handleModalChange, selectedItem, handleBookmark, bookmarked } =
    props;

  const isBookmarked = bookmarked.includes(selectedItem?.id);

  const item = selectedItem && selectedItem;

  const handleBookmarkClick = (e) => {
    e.stopPropagation();
    handleBookmark(selectedItem?.id);
  };

  return (
    <>
      {modal && (
        <section className={classes.backdrop} onClick={handleModalChange}>
          <section className={classes.madalView}>
            <img
              src={item.image_url || item.brand_image_url}
              alt={item.title}
              className={classes.modalImg}
              onClick={(e) => e.stopPropagation()}
            />
            <p onClick={(e) => e.stopPropagation()} className={classes.title}>
              {item.title || item.brand_name}
            </p>
            <img
              src={closeButton}
              alt="closeButton"
              className={classes.close}
            />
            <img
              className={classes.bookmark}
              src={isBookmarked ? bookmarkOn : bookmarkOff}
              alt={isBookmarked ? 'bookmarkOn' : 'bookmarkOff'}
              onClick={handleBookmarkClick}
            />
          </section>
        </section>
      )}
    </>
  );
};

export default Modal;
