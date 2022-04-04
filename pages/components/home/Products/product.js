import ProductCard from "./productCard";
import data from "./products.json";

const Product = () => {
  return (
    <>
      <ProductCard
        img={data[0].img}
        title={data[0].title}
        info={data[0].info}
        price={data[0].price}
        rating={data[0].rating}
      />
      <ProductCard
        img={data[1].img}
        title={data[1].title}
        info={data[1].info}
        price={data[1].price}
        rating={data[1].rating}
      />
      <ProductCard
        img={data[2].img}
        title={data[2].title}
        info={data[2].info}
        price={data[2].price}
        rating={data[2].rating}
      />
      <ProductCard
        img={data[3].img}
        title={data[3].title}
        info={data[3].info}
        price={data[3].price}
        rating={data[3].rating}
      />
    </>
  );
};

export default Product;
