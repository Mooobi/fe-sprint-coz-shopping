import classes from './ProductList.module.css';
import bookmarkOff from '../icon/bookmark - off.png';
import bookmarkOn from '../icon/bookmark - on.png';

const ProductList = (props) => {
  const { item, handleBookmark, handleModalChange } = props;

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

  const isBookmarked = localStorage.getItem(item?.id);

  const handleBookmarkClick = (e) => {
    e.stopPropagation();
    handleBookmark(item?.id);
  };

  return (
    <>
      <section className={classes.product}>
        <img
          className={classes.bookmark}
          src={isBookmarked ? bookmarkOn : bookmarkOff}
          alt={isBookmarked ? 'bookmarkOn' : 'bookmarkOff'}
          onClick={handleBookmarkClick}
        />
        {type === 'Product' && (
          <section className={classes.info}>
            <img
              className={classes.img}
              src={image_url}
              alt={title}
              onClick={() => handleModalChange(item)}
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
          <section className={classes.info}>
            <img
              className={classes.img}
              src={image_url}
              alt={title}
              onClick={() => handleModalChange(item)}
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
              onClick={() => handleModalChange(item)}
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
              onClick={() => handleModalChange(item)}
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
