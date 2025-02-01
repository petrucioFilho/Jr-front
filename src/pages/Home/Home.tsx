import NavResponsive from "../../components/NavBar/NavResponsive";
import "./Home.css";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <div className="flex-row">
        <div className="flex-1">
          <NavResponsive />
        </div>
        <div className="flex-1 mx-auto">
          <ImageCarousel />
        </div>

        <h1 className="pt-8">Minha pagina</h1>
        <div className="flex-1 mx-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
