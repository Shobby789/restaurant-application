import "./Home.css";
import AboutSection from "../../components/aboutSection/AboutSection";
import ProductGrid from "../../components/productGrid/ProductGrid";
import SubscribeSection from "../../components/subscribeSection/SubscribeSection";
import Footer from "../../components/footer/Footer";
import Carousel from "../../components/carousel/Carousel";

export default function Home() {
  return (
    <>
      <Carousel />
      <div className="container-fluid py-5 position-relative">
        <AboutSection />
      </div>
      <ProductGrid />
      <SubscribeSection />
      <Footer />
    </>
  );
}
