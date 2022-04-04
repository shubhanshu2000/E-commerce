import ImageSlider from "./Images/ImageSlider";
import Images from "./Images/Images.json";
import HomePageProductView from "./Products/homepageproduct";
import Footer from "./footer";

const HomePage = () => {
  return (
    <>
      <div>
        <ImageSlider slides={Images} />
        <HomePageProductView />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
