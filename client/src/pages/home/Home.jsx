import "./Home.css";
import AboutSection from "../../components/aboutSection/AboutSection";
import ProductGrid from "../../components/productGrid/ProductGrid";
import SubscribeSection from "../../components/subscribeSection/SubscribeSection";
import Footer from "../../components/footer/Footer";
import Carousel from "../../components/carousel/Carousel";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loggedInUser = JSON.parse(localStorage.getItem("userDetails"));
  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  }, []);
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
