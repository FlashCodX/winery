import React from "react";
import { WineList } from "./WineList";

describe("<WineList />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<WineList />);
  });
});
