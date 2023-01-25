import { WineType } from "@/typings";
import React from "react";
import { Wine } from "./Wine";

describe("<Wine />", () => {
  const testWine: WineType = {
    id: 1,
    comments: [
      {
        id: 1,
        content: "test",
        username: "john",
      },
    ],
    description: "dsd",
    rating: 5,
    region: "ffdfs",
    winery: "dffsf",
    image: "Riesling.png",
    name: "Wine A",
    year: 2021,
    price: 20,
    quantity: 10,
  };

  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Wine wine={testWine} />);
  });

  it("renders correctly with different data", () => {
    cy.mount(<Wine wine={testWine} />);
    cy.get("tr").should("contain", testWine.name);
    cy.get("tr").should("contain", testWine.year);
    cy.get("tr").should("contain", testWine.price);
  });
});
