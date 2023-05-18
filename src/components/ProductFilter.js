import classes from './ProductFilter.module.css';
import all from '../img/all.png';
import brand from '../img/brand.png';
import category from '../img/category.png';
import exhibition from '../img/exhibition.png';
import product from '../img/product.png';

const FilterType = {
  All: { type: null, label: '전체' },
  Product: { type: 'Product', label: '상품' },
  Category: { type: 'Category', label: '카테고리' },
  Exhibition: { type: 'Exhibition', label: '기획전' },
  Brand: { type: 'Brand', label: '브랜드' },
};

const ProductFilter = ({ handleFilterClick, filter }) => {
  const filterCard = [
    { image: all, ...FilterType.All },
    { image: product, ...FilterType.Product },
    { image: category, ...FilterType.Category },
    { image: exhibition, ...FilterType.Exhibition },
    { image: brand, ...FilterType.Brand },
  ];

  return (
    <>
      <section className={classes.filterContainer}>
        {filterCard.map((item, index) => (
          <section
            className={classes.filter}
            key={index}
            onClick={() => handleFilterClick(item.type)}
          >
            <img src={item.image} alt={item.label} />
            <label
              className={`${classes.label} ${
                item.type === filter && classes.current
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
