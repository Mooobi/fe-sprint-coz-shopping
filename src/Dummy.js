import ProductComponent from './components/productComponent';

const Dummy = () => {
  const data = {
    id: 11,
    type: 'Product',
    title: '윌슨 테니스공',
    sub_title: null,
    brand_name: null,
    price: '155000',
    discountPercentage: 35,
    image_url:
      'https://images.unsplash.com/photo-1589550458041-48caacbe4367?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    brand_image_url: null,
    follower: null,
  };

  return (
    <>
      <ProductComponent data={data} />
    </>
  );
};

export default Dummy;
