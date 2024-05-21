import logo from "./logo.svg";
import "./App.css";
import Category from "./Category/Category";
import SubCategoryDetails from "./SubCategory/SubCategoryDetails";
import { useEffect, useState } from "react";
import { FruitProvider } from "./fruitContext";
import { Button } from "react-bootstrap";

function App() {
  useEffect(() => {
    document.title = "Fruits Details";
  }, []);
  const [selectedCategory, setSelectedCategoryDetails] = useState({});
  const onSubCategoryClick = (eachSubCategoryDetails) => {
    console.log("SubCategoryClick", eachSubCategoryDetails);
    setSelectedCategoryDetails({ ...eachSubCategoryDetails });
  };
  console.log("selectedCategory is", selectedCategory);
  return (
    <div>
      <FruitProvider>
        <Category onSubCategoryClick={onSubCategoryClick} />
        <SubCategoryDetails selectedCategory={selectedCategory} />
      </FruitProvider>
    </div>
  );
}

export default App;
