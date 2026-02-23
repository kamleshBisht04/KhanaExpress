import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import TopRatedSection from "../../components/TopRatedSection/TopRatedSection";

function Home() {
  return (
    <div>
      <Header />
      <TopRatedSection />
      <ExploreMenu />
      <FoodDisplay />
      <AppDownload />
    </div>
  );
}

export default Home;
