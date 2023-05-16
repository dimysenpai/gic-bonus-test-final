import HeroTop from "../components/HeroTop";
import TrainingList from "../components/TrainingList";
import ServiceList from "../components/ServiceList";

function HomePage() {
  return (
    <div>
      <HeroTop />
      <ServiceList />
      <TrainingList />
    </div>
  );
}

export default HomePage;
