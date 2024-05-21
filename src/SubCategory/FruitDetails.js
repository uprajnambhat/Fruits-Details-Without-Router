import React, { useEffect, useState } from "react";
import { fruitsDetails } from "../json-fruit-details";
import { Button, Table } from "react-bootstrap";
import MoreFruitDetails from "./MoreFruitDetails";
import { useDispatch, useSelector } from "react-redux";

const FruitDetails = (props) => {
  const { eachFruit = {} } = useSelector((state) => state.subCategoryDetails);
  const dispatch = useDispatch();
  const [selectedNutritionDetails, setSelectedNutritionDetails] = useState({});
  const [selectedGrowingRegionsDetails, setSelectedGrowingRegionsDetails] =
    useState([]);
  const [selectedPricesDetails, setSelectedPricesDetails] = useState({});
  const [selectedAvailabilityDetails, setSelectedAvailabilityDetails] =
    useState({});

  console.log("fruitdetailsProps", eachFruit);
  const { selectedFruitDetails } = props;

  const {
    name: fullFruitName = "",
    color = "",
    taste = "",
    nutrition = {},
    harvestSeason = "",
    growingRegions = [],
    prices = {},
    availability = {},
  } = eachFruit;
  let test = "abc";

  console.log("taste is", taste);

  const onNutritionDetailsClick = (nutritionDetails) => {
    dispatch({
      type: "UPDATE_NUTRITION_DETAILS",
      payload: nutritionDetails,
    });
    console.log("onNutritionDetailsClick", nutritionDetails);
    test = "xyz";
    setSelectedNutritionDetails({ ...nutritionDetails });
  };

  const onGrowingRegionsDetailsClick = (growingRegionsDetails) => {
    dispatch({
      type: "UPDATE_GROWINGREGIONS_DETAILS",
      payload: growingRegionsDetails,
    });
    console.log("onGrowingRegionsDetailsClick", growingRegionsDetails);
    setSelectedGrowingRegionsDetails([...growingRegionsDetails]);
  };
  const onPricesDetailsClick = (pricesDetails) => {
    dispatch({
      type: "UPDATE_PRICESDETAILS_DETAILS",
      payload: pricesDetails,
    });
    console.log("onPricesDetailsClick", pricesDetails);
    setSelectedPricesDetails({ ...pricesDetails });
  };
  const onAvailabilityDetailsClick = (availabilityDetails) => {
    dispatch({
      type: "UPDATE_AVAILABILITY_DETAILS",
      payload: availabilityDetails,
    });
    console.log("onAvailabilityDetailsClick", availabilityDetails);
    setSelectedAvailabilityDetails({ ...availabilityDetails });
  };

  useEffect(() => {
    setSelectedNutritionDetails("");
    setSelectedGrowingRegionsDetails("");
    setSelectedPricesDetails("");
    setSelectedAvailabilityDetails("");
  }, [fullFruitName]);

  console.log("test", test);

  return (
    <div>
      {!!fullFruitName && (
        <>
          <h5>More details on {fullFruitName}</h5>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Name: </td>
                <td>{fullFruitName}</td>
              </tr>
              <tr>
                <td>Color: </td>
                <td>{color}</td>
              </tr>
              <tr>
                <td>Taste: </td>
                <td>{taste}</td>
              </tr>
              <tr>
                <td>Nutrition: </td>
                <td>
                  <Button
                    variant="outline-secondary"
                    onClick={() => {
                      onNutritionDetailsClick(selectedFruitDetails.nutrition);
                    }}
                  >
                    More details
                  </Button>
                </td>
              </tr>
              <tr>
                <td>HarvestSeason: </td>
                <td>{harvestSeason}</td>
              </tr>
              <tr>
                <td>GrowingRegions: </td>
                <td>
                  <Button
                    variant="outline-secondary"
                    onClick={() => {
                      onGrowingRegionsDetailsClick(
                        selectedFruitDetails.growingRegions
                      );
                    }}
                  >
                    More details
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Prices: </td>
                <td>
                  <Button
                    variant="outline-secondary"
                    onClick={() => {
                      onPricesDetailsClick(selectedFruitDetails.prices);
                    }}
                  >
                    More details
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Availability: </td>
                <td>
                  <Button
                    variant="outline-secondary"
                    onClick={() => {
                      onAvailabilityDetailsClick(
                        selectedFruitDetails.availability
                      );
                    }}
                  >
                    More details
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </>
      )}
      <MoreFruitDetails
        selectedNutritionDetails={selectedNutritionDetails}
        selectedGrowingRegionsDetails={selectedGrowingRegionsDetails}
        selectedPricesDetails={selectedPricesDetails}
        selectedAvailabilityDetails={selectedAvailabilityDetails}
      />
    </div>
  );
};

export default FruitDetails;
