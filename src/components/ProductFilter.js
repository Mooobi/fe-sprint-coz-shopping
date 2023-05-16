import classes from './ProductFilter.module.css';
import all from '../img/all.png';
import brand from '../img/brand.png';
import category from '../img/category.png';
import exhibition from '../img/exhibition.png';
import product from '../img/product.png';

const ProductFilter = (props) => {
  const filterCard = [
    { image: all, label: '전체', type: null },
    {
      image: product,
      label: '상품',
      type: 'Product',
    },
    { image: category, label: '카테고리', type: 'Category' },
    { image: exhibition, label: '기획전', type: 'Exhibition' },
    { image: brand, label: '브랜드', type: 'Brand' },
  ];

  return (
    <>
      <section className={classes.filterContainer}>
        {filterCard.map((item, index) => (
          <section
            className={classes.filter}
            key={index}
            onClick={() => props.handleFilterClick(item.type)}
          >
            <img src={item.image} alt={item.label} />
            <label
              className={`${classes.label} ${
                item.type === props.filter && classes.current
              }`}
            >
              {item.label}
            </label>
          </section>
        ))}
      </section>
    </>
  );
};

export default ProductFilter;
