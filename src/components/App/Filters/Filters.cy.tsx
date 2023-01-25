import React from "react";
import { Filters } from "./Filters";

describe("<Filters />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Filters />);
  });

  it("renders the correct options in the select element", () => {
    cy.mount(<Filters />);
    cy.get("select").find("option").should("have.length", 4);
    cy.get("select").find("option").eq(0).should("have.value", "name");
    cy.get("select").find("option").eq(1).should("have.value", "year");
    cy.get("select").find("option").eq(2).should("have.value", "price");
    cy.get("select").find("option").eq(3).should("have.value", "quantity");
  });
  it("sets the order type correctly on change", () => {
    cy.mount(<Filters />);
    cy.get("select").select("year");
    cy.get("select").should("have.value", "year");
  });
});
