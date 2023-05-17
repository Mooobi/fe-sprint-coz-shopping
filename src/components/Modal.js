import classes from './Modal.module.css';
import closeButton from '../icon/closeButton.png';
import bookmarkOff from '../icon/bookmark - off.png';
import bookmarkOn from '../icon/bookmark - on.png';

const Modal = (props) => {
  const { modal, handleModalChange, selectedItem, handleBookmark, bookmarked } =
    props;

  const isBookmarked = bookmarked.includes(selectedItem?.id);

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
              src={selectedItem?.image_url || selectedItem?.brand_image_url}
              alt={selectedItem?.title}
              className={classes.modalImg}
              onClick={(e) => e.stopPropagation()}
            />
            <p onClick={(e) => e.stopPropagation()} className={classes.title}>
              {selectedItem?.title || selectedItem?.brand_name}
            </p>
            <img
              src={closeButton}
              alt="closeButton"
              className={classes.close}
            />
            {!isBookmarked && (
              <img
                className={classes.bookmark}
                src={bookmarkOff}
                alt="bookmarkOff"
                onClick={handleBookmarkClick}
              />
            )}
            {isBookmarked && (
              <img
                className={classes.bookmark}
                src={bookmarkOn}
                alt="bookmarkOn"
                onClick={handleBookmarkClick}
              />
            )}
          </section>
        </section>
      )}
    </>
  );
};

export default Modal;
