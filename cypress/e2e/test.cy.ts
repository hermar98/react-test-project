describe("Todo app tests", () => {
  beforeEach(() => {
    // Setup
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="todo-list"]');
  });

  it("should add a new todo item", () => {
    // Action
    cy.get('[data-cy="add-item-input"]').type("Test");
    cy.get('[data-cy="add-item-button"]').click();

    // Assertion
    cy.get('[data-cy="todo-list"]').find("li").should("have.length", 4);
    cy.get('[data-cy="todo-item-3"]').should("have.text", "Test");
  });

  it.only("should check todo item", () => {
    cy.get('[data-cy="todo-item-1-checkbox"]').as("checkbox");

    // Action
    cy.get("@checkbox").click();

    // Assertion
    cy.get("@checkbox").find("input[type=checkbox]").should("be.checked");
  });
});
