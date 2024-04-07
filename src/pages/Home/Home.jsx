import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import { useState } from "react";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import WhyFoodZing from "../../components/WhyFoodZing/WhyFoodZing";
import About from "../../components/About/About";
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      {<Header />}
      <WhyFoodZing />
      <About />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
