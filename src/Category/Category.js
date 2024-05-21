import React, { useContext, useEffect } from "react";
// import { fruitsDetails } from "../json-fruit-details";
import { Button, Tab, Table } from "react-bootstrap";
import "./categoryStyle.css";
import { FruitContext } from "../fruitContext";
import { useDispatch, useSelector } from "react-redux";

const Category = (props) => {
  const { fruitsDetails = [] } = useSelector(
    (state) => state.fullCategoryDetails
  );
  const dispatch = useDispatch();
  console.log("props", props);
  // console.log("ccccccc", categoryDetails);

  const {
    selectedFruit = "",
    selectedCategory = "",
    setSelectedCategoryDetails,
    setCatDetails,
    catDetails,
  } = useContext(FruitContext);
  console.log("useContext", selectedFruit, selectedCategory, catDetails);

  useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCatDetails(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const onCategoryClick = (eachSubCategory) => {
    dispatch({
      type: "UPDATE_SELECTED_FRUIT_DETAILS",
      payload: eachSubCategory,
    });
    // setSelectedCategoryDetails(eachSubCategory);
    // props.onSubCategoryClick(eachSubCategory);
  };

  return (
    <div>
      {fruitsDetails.map((eachFruitType, index) => {
        const { category = "", subcategories = [] } = eachFruitType;
        console.log("subcategories", subcategories);
        return (
          <div key={`subcategories-${index}`}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>
                    <h2 className="align-style">{category} Details</h2>
                    <h4>Click on the Subcategories for more details</h4>
                  </th>
                </tr>
              </thead>
            </Table>
            <Table striped bordered hover>
              <tbody>
                <tr>
                  {subcategories.map((eachSubCategory, subcategoryIndex) => {
                    const { name = "", varieties = [] } = eachSubCategory;
                    console.log("eachSubCategory is", eachSubCategory);
                    return (
                      <td key={`eachSubCategory-${subcategoryIndex}`}>
                        <Button
                          variant="outline-secondary"
                          onClick={() => {
                            onCategoryClick(eachSubCategory);
                          }}
                        >
                          {name}
                        </Button>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </Table>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
