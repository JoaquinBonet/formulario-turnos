/// <reference types="cypress" />

context('Test formulario', () => {
  before(() => {
    cy.visit('http://localhost:8080/index.html');

  });

  it('test de funcionalidad', () => {
   cy.get('#nombre').type("Joaquin");
   cy.get("#mail").type("maildeprueba@mail.com");
   cy.get("#tel").type("1142423232");
   cy.get("#fecha").type("2023-01-10");
   cy.get("#hora").type("12:41");
   cy.get("input[type=submit]").click();
   cy.get(".resultados").should("have.text", "Solicitud enviada correctamente");

  });
});


