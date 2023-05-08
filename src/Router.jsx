import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import TrainingPage from "./pages/TrainingPage";
import AboutPage from "./pages/AboutPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/service" element={<ServicePage />} />
      <Route path="/training" element={<TrainingPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default Router;
