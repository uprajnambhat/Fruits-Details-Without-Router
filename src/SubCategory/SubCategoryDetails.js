import React, { useContext, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import FruitDetails from "./FruitDetails";
import { FruitContext } from "../fruitContext";
import { useDispatch, useSelector } from "react-redux";

const SubCategoryDetails = (props) => {
  const { fruitDetails = [], selectedFruitCategory = {} } = useSelector(
    (state) => state.fullCategoryDetails
  );
  const dispatch = useDispatch();

  const [selectedFruitDetails, setSelectedFruitDetails] = useState({});
  const contextValue = useContext(FruitContext);
  console.log("RCB", selectedFruitCategory);
  const { selectedCategory = {} } = contextValue;

  console.log("props is", props.selectedCategory);

  const { name = "", varieties = [] } = selectedFruitCategory;
  console.log("name is", name);

  const onFruitClick = (fruitDetails) => {
    dispatch({
      type: "UPDATE_EACHFRUIT_DETAILS",
      payload: fruitDetails,
    });
    console.log(fruitDetails);
    setSelectedFruitDetails({ ...fruitDetails });
  };
  useEffect(() => {
    setSelectedFruitDetails("");
  }, [name]);

  return (
    <div>
      {!!name && <h5>The below are the details of {name} category</h5>}
      <Table striped bordered hover>
        <tbody>
          {varieties.map((eachFruit, index) => {
            const {
              name: fruitName = "",
              color = "",
              taste = "",
              nutrition = {},
              harvestSeason = "",
              growingRegions = [],
              prices = {},
              availability = {},
            } = eachFruit;
            console.log("eachfruitdetails", eachFruit);
            return (
              <tr key={`eachfruitdetails-${index}`}>
                <td>{fruitName}</td>
                <td>
                  <Button
                    variant="outline-secondary"
                    onClick={() => {
                      onFruitClick(eachFruit);
                    }}
                  >
                    Click here for more details
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <FruitDetails selectedFruitDetails={selectedFruitDetails} />
    </div>
  );
};

export default SubCategoryDetails;
