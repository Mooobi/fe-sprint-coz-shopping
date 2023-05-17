import classes from './ProductList.module.css';
import bookmarkOff from '../icon/bookmark - off.png';
import bookmarkOn from '../icon/bookmark - on.png';
import { useEffect } from 'react';

const ProductList = (props) => {
  const { item, handleBookmark, handleModalOpen, bookmarked, setBookmarked } =
    props;

  const {
    type,
    title,
    sub_title,
    brand_name,
    price,
    discountPercentage,
    image_url,
    brand_image_url,
    follower,
  } = item;

  const isBookmarked = localStorage.getItem(item.id);

  useEffect(() => {
    const itemData = localStorage.getItem(item.id);
    if (itemData) {
      setBookmarked([...bookmarked, item.id]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setBookmarked, item.id]);

  useEffect(() => {
    const saveData = () => {
      localStorage.setItem(item.id, JSON.stringify(item));
    };

    const removeData = () => {
      localStorage.removeItem(item.id);
    };

    if (isBookmarked) {
      saveData();
    } else {
      removeData();
    }
  }, [isBookmarked, item, item.id]);

  return (
    <>
      <section className={classes.product}>
        {!isBookmarked && (
          <img
            className={classes.bookmark}
            src={bookmarkOff}
            alt="bookmarkOff"
            onClick={(e) => {
              e.stopPropagation();
              handleBookmark(item.id);
            }}
          />
        )}
        {isBookmarked && (
          <img
            className={classes.bookmark}
            src={bookmarkOn}
            alt="bookmarkOn"
            onClick={(e) => {
              e.stopPropagation();
              handleBookmark(item.id);
            }}
          />
        )}
        {type === 'Product' && (
          <section className={classes.info}>
            <img
              className={classes.img}
              src={image_url}
              alt={title}
              onClick={() => handleModalOpen(item)}
            />
            <p className={`${classes.title} ${classes.first}`}>{title}</p>
            <p className={`${classes.discount} ${classes.second}`}>
              {discountPercentage ? `${discountPercentage}%` : '00%'}
            </p>
            <p className={`${classes.price} ${classes.fourth}`}>
              {`${Number(price).toLocaleString()}원`}
            </p>
          </section>
        )}
        {type === 'Category' && (
          <section className={classes.ifno}>
            <img
              className={classes.img}
              src={image_url}
              alt={title}
              onClick={() => handleModalOpen(item)}
            />
            <p
              className={`${classes.title} ${classes.first}`}
            >{`# ${title}`}</p>
          </section>
        )}
        {type === 'Exhibition' && (
          <section className={classes.info}>
            <img
              className={classes.img}
              src={image_url}
              alt={title}
              onClick={() => handleModalOpen(item)}
            />
            <p className={`${classes.title} ${classes.first}`}>{title}</p>
            <p className={`${classes.subTitle} ${classes.third}`}>
              {sub_title}
            </p>
          </section>
        )}
        {type === 'Brand' && (
          <section className={classes.info}>
            <img
              className={classes.img}
              src={brand_image_url}
              alt={title}
              onClick={() => handleModalOpen(item)}
            />
            <p className={`${classes.title} ${classes.first}`}>{brand_name}</p>
            <p className={`${classes.count} ${classes.second}`}>관심고객수</p>
            <p className={`${classes.follower} ${classes.fourth}`}>
              {follower.toLocaleString()}
            </p>
          </section>
        )}
      </section>
    </>
  );
};

export default ProductList;
