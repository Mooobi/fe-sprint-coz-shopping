import classes from './productComponent.module.css';
import bookmarkOff from '../icon/bookmark - off.png';
import bookmarkOn from '../icon/bookmark - on.png';
import { useState } from 'react';

const ProductComponent = ({ data }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

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
  } = data;

  return (
    <>
      <section className={classes.product}>
        {!bookmarked && (
          <img
            className={classes.bookmark}
            src={bookmarkOff}
            alt="bookmarkOff"
            onClick={handleBookmark}
          />
        )}
        {bookmarked && (
          <img
            className={classes.bookmark}
            src={bookmarkOn}
            alt="bookmarkOn"
            onClick={handleBookmark}
          />
        )}
        {type === 'Product' && (
          <section className={classes.info}>
            <img className={classes.img} src={image_url} alt={title} />
            <p className={`${classes.title} ${classes.first}`}>{title}</p>
            <p className={`${classes.discount} ${classes.second}`}>
              {discountPercentage ? `${discountPercentage}%` : '00%'}
            </p>
            <p className={`${classes.price} ${classes.fourth}`}>
              {Number(price).toLocaleString()}
            </p>
          </section>
        )}
        {type === 'Category' && (
          <section className={classes.ifno}>
            <img className={classes.img} src={image_url} alt={title} />
            <p
              className={`${classes.title} ${classes.first}`}
            >{`# ${title}`}</p>
          </section>
        )}
        {type === 'Exhibition' && (
          <section className={classes.info}>
            <img className={classes.img} src={image_url} alt={title} />
            <p className={`${classes.title} ${classes.first}`}>{title}</p>
            <p className={`${classes.subTitle} ${classes.third}`}>
              {sub_title}
            </p>
          </section>
        )}
        {type === 'Brand' && (
          <section className={classes.info}>
            <img className={classes.img} src={brand_image_url} alt={title} />
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

export default ProductComponent;
