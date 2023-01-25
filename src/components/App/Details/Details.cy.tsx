import { WineType } from "@/typings";
import React from "react";
import { Details } from "./Details";

describe("<Details />", () => {
  const testWine: WineType = {
    name: "Test Wine",
    id: 1,
    quantity: 20,
    rating: 4.6,

    region: "Test Region",
    description: "Test Description",
    year: 2020,
    winery: "Test Winery",
    price: 20,
    image: "Riesling.png",
    comments: [
      {
        id: 1,
        content: "test",
        username: "John",
      },

      {
        id: 2,
        content: "test2",
        username: "James",
      },
    ],
  };
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Details wine={testWine} />);
  });

  it("renders correctly with different data", () => {
    cy.mount(<Details wine={testWine} />);
    cy.get("h1").should("contain", testWine.name);
    cy.get("p").should("contain", testWine.region);
    cy.get("span").should("contain", testWine.description);
  });

  // it("displays loading state when no data is available", () => {
  //   cy.mount(<Details wine={{}} />);
  //   cy.get("p").should("contain", "Loading");
  // });
});
