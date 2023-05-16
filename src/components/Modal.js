import classes from './Modal.module.css';
import closeButton from '../icon/closeButton.png';
import bookmarkOff from '../icon/bookmark - off.png';
import bookmarkOn from '../icon/bookmark - on.png';
import { useEffect } from 'react';

const Modal = (props) => {
  const {
    modal,
    handleModalClose,
    selectedItem,
    handleBookmark,
    handleOpenOnToast,
    handleOpenOffToast,
    bookmarked,
    setBookmarked,
  } = props;
  const isBookmarked = bookmarked.includes(selectedItem?.id);

  useEffect(() => {
    const itemData = localStorage.getItem(selectedItem?.id);
    if (itemData) {
      setBookmarked([...bookmarked, selectedItem?.id]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setBookmarked, selectedItem?.id]);

  useEffect(() => {
    const saveData = () => {
      localStorage.setItem(selectedItem?.id, JSON.stringify(selectedItem));
    };

    const removeData = () => {
      localStorage.removeItem(selectedItem?.id);
    };

    if (isBookmarked) {
      saveData();
    } else {
      removeData();
    }
  }, [isBookmarked, selectedItem, selectedItem?.id]);

  const handleBookmarkClick = (e) => {
    e.stopPropagation();
    handleBookmark(selectedItem?.id);
    if (!isBookmarked) {
      handleOpenOnToast();
    } else {
      handleOpenOffToast();
    }
  };

  return (
    <>
      {modal && (
        <section className={classes.backdrop} onClick={handleModalClose}>
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
