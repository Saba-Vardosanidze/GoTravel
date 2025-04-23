import ExploreMore from "./components/organisms/ExploreMore/ExploreMore";
import Header from "./components/organisms/Header/Header";
import Home from "./views/Home/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ExploreMore />
    </div>
  );
};

export default App;
