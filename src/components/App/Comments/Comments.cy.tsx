import { CommentType } from "@/typings";
import React from "react";
import { Comments } from "./Comments";

const mockData: CommentType[] = [{ content: "test", id: 1, username: "John" }];

describe("<Comments />", () => {
  it("renders", () => {
    cy.mount(<Comments comments={mockData} />);
  });
  it("renders comments correctly", () => {
    cy.mount(<Comments comments={mockData} />);
    cy.contains("John").should("be.visible");
    cy.contains("test").should("be.visible");
  });

  it("displays loading message when comments are loading", () => {
    cy.mount(<Comments comments={[]} />);
    cy.contains("Loading").should("be.visible");
  });

  it("loads images correctly", () => {
    cy.mount(<Comments comments={mockData} />);
    cy.get("img").should("have.attr", "src").and("include", "randomuser.me");
    cy.get("img")
      .should("have.css", "width", "50px")
      .and("have.css", "height", "50px");
  });
});
