import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/ui/NavBar";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { DcScreen } from "../components/dc/DcScreen";

export const DashboardRouters = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/marvel" element={<MarvelScreen />} />
          <Route path="/hero/:heroId" element={<HeroScreen />} />
          <Route path="/dc" element={<DcScreen />} />

          <Route path="*" element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  );
};
