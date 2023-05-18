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

  const filterType = {
    product: 'Product',
    category: 'Category',
    exhibition: 'Exhibition',
    brand: 'Brand',
  };

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
        <section className={classes.info}>
          <img
            className={classes.img}
            src={type !== filterType.brand ? image_url : brand_image_url}
            alt={title}
            onClick={() => handleModalChange(item)}
          />
          <p className={`${classes.title} ${classes.first}`}>
            {type === filterType.category
              ? `# ${title}`
              : type === filterType.brand
              ? brand_name
              : title}
          </p>
          {type === filterType.product && (
            <>
              <p className={`${classes.discount} ${classes.second}`}>
                {discountPercentage ? `${discountPercentage}%` : '00%'}
              </p>
              <p className={`${classes.price} ${classes.fourth}`}>
                {`${Number(price).toLocaleString()}원`}
              </p>
            </>
          )}
          {type === filterType.exhibition && (
            <p className={`${classes.subTitle} ${classes.third}`}>
              {sub_title}
            </p>
          )}
          {type === filterType.brand && (
            <>
              <p className={`${classes.count} ${classes.second}`}>관심고객수</p>
              <p className={`${classes.follower} ${classes.fourth}`}>
                {follower.toLocaleString()}
              </p>
            </>
          )}
        </section>
      </section>
    </>
  );
};

export default ProductList;
