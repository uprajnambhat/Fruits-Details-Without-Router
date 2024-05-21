import React, { useContext, useEffect, useRef } from "react";
import { Table } from "react-bootstrap";
import { FruitContext } from "../fruitContext";
import { useSelector } from "react-redux";

const MoreFruitDetails = (props) => {
  const {
    nutritionDetails = {},
    growingRegionsDetails = [],
    pricesDetails = {},
    availabilityDetails = {},
  } = useSelector((state) => state.subCategoryDetails);

  console.log(
    "abcde",
    nutritionDetails,
    growingRegionsDetails,
    pricesDetails,
    availabilityDetails
  );

  console.log("moreFruitDetails is bvcsg", nutritionDetails);
  const tableRef = useRef();
  const growingRegionRef = useRef();
  const priceRef = useRef();
  const availabilityRef = useRef();
  let test = useRef(0);
  const contextValue = useContext(FruitContext);
  // const {
  //   nutritionDetails = {},
  //   growingRegionsDetails = [],
  //   pricesDetails = {},
  //   availabilityDetails = {},
  // } = nutritionDetails;

  const { catDetails = [] } = contextValue;

  console.log("nutritionDetails", nutritionDetails);
  console.log("growingRegionsDetails", growingRegionsDetails, catDetails);
  const {
    calories = "",
    carbs = "",
    fiber = "",
    vitamins = {},
  } = nutritionDetails;

  const {
    localMarket: localMarketPrice = "",
    supermarket: supermarketPrice = "",
  } = pricesDetails;

  const { vitaminC = "", vitaminA = "n/a" } = vitamins;

  const showPrices = !!localMarketPrice || !!supermarketPrice;

  const {
    localMarket: localMarketAvailability = "n/a",
    supermarket: superMarketAvailability = "n/a",
  } = availabilityDetails;
  const showAvailability =
    (localMarketAvailability !== "n/a" || superMarketAvailability !== "n/a") &&
    (localMarketAvailability !== undefined ||
      superMarketAvailability !== undefined);

  useEffect(() => {
    if (!!calories) {
      tableRef.current.scrollIntoView();
      test.current = 100;
    }
  }, [calories]);

  useEffect(() => {
    if (growingRegionsDetails.length > 0) {
      growingRegionRef.current.scrollIntoView();
    }
  }, [growingRegionsDetails]);

  useEffect(() => {
    if (!!showPrices) {
      priceRef.current.scrollIntoView();
    }
  }, [showPrices]);

  useEffect(() => {
    if (showAvailability) {
      availabilityRef.current.scrollIntoView();
    }
  }, [showAvailability]);

  console.log("testss", test);

  return (
    <div>
      {!!calories && (
        <>
          <h6>Below are the nutrion details</h6>
          <Table striped bordered hover ref={tableRef}>
            <tbody>
              <tr>
                <td>Calories</td>
                <td>{calories}</td>
              </tr>
              <tr>
                <td>Carbs</td>
                <td>{carbs}</td>
              </tr>
              <tr>
                <td>Fiber</td>
                <td>{fiber}</td>
              </tr>
              <tr>
                <h6>Vitamin Details</h6>
              </tr>
              <tr>
                <td>Vitamin C</td>
                <td>{vitaminC}</td>
              </tr>
              <tr>
                <td>Vitamin A</td>
                <td>{vitaminA}</td>
              </tr>
            </tbody>
          </Table>
        </>
      )}
      {growingRegionsDetails.length > 0 && (
        <>
          <h6>Growing Regions are:</h6>
          <Table striped bordered hover ref={growingRegionRef}>
            <tbody>
              {growingRegionsDetails.map((eachRegion, index) => {
                return <tr key={`growing-regions-${index}`}>{eachRegion}</tr>;
              })}
            </tbody>
          </Table>
        </>
      )}
      {showPrices && (
        <div ref={priceRef}>
          <h6>Price Details:</h6>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Local Market Price: </td>
                <td>{localMarketPrice}</td>
              </tr>
              <tr>
                <td>Super Market Price:</td>
                <td>{supermarketPrice}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}
      {showAvailability && (
        <div ref={availabilityRef}>
          <h6>Availability Details:</h6>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Local Market Availability: </td>
                <td>
                  {localMarketAvailability ? "Available" : "Not Available"}
                </td>
              </tr>
              <tr>
                <td>Super Market Availability:</td>
                <td>
                  {superMarketAvailability ? "Available" : "Not Available"}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default MoreFruitDetails;
