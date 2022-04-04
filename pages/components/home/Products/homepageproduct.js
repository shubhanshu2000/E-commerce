import HomePageProductCard from "./homepageproductview";
import data from "./products.json";

const HomePageProductView = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold my-10">Products</h1>
      <div className="flex justify-around">
        <HomePageProductCard
          img={data[0].img}
          title={data[0].title}
          info={data[0].info}
          price={data[0].price}
          rating={data[0].rating}
        />
        <HomePageProductCard
          img={data[1].img}
          title={data[1].title}
          info={data[1].info}
          price={data[1].price}
          rating={data[1].rating}
        />
        <HomePageProductCard
          img={data[2].img}
          title={data[2].title}
          info={data[2].info}
          price={data[2].price}
          rating={data[2].rating}
        />
        <HomePageProductCard
          img={data[3].img}
          title={data[3].title}
          info={data[3].info}
          price={data[3].price}
          rating={data[3].rating}
        />
      </div>
    </>
  );
};

export default HomePageProductView;
