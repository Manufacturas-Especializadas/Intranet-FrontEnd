import Calendario from "../../components/Calendario/Calendario";
import { EnlacesRapidos } from "../../components/EnlacesRapidos/EnlacesRapidos";
import EquipoDestacado from "../../components/EquipoDestacado/EquipoDestacado";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Noticias from "../../components/Noticias/Noticias";
import Valores from "../../components/Valores/Valores";

const Home = () => {
  return (
    <>
      <Hero />
      <Noticias />
      <EnlacesRapidos />
      <Valores />
      <Calendario />
      {/* <EquipoDestacado /> */}
      <Footer />
    </>
  );
};

export default Home;
