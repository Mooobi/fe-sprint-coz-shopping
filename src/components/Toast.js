import classes from './Toast.module.css';
import bookmarkOff from '../icon/bookmark - off.png';
import bookmarkOn from '../icon/bookmark - on.png';

const Toast = (props) => {
  return (
    <>
      <section
        className={`${classes.toastWrapper} ${props.onToast && classes.on}`}
      >
        <section className={classes.toast}>
          <img
            src={bookmarkOn}
            alt="bookmarkOn"
            className={classes.toastBookmark}
          />
          <p className={classes.toastMessage}>
            상품이 북마크에 추가되었습니다.
          </p>
        </section>
      </section>
      <section
        className={`${classes.toastWrapper} ${props.offToast && classes.on}`}
      >
        <section className={classes.toast}>
          <img
            src={bookmarkOff}
            alt="bookmarkOff"
            className={classes.toastBookmark}
          />
          <p className={classes.toastMessage}>
            상품이 북마크에서 제거되었습니다.
          </p>
        </section>
      </section>
    </>
  );
};

export default Toast;
