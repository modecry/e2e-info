describe('example-data-attrs', ()=>{
  it('get-example-component ', function () {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cypress-element="for-example-list-item"]').should('have.length', 3);
    cy.get('[data-cypress-element="for-example-link"]').should('have.text', 'Example link');
    cy.get('[data-cypress-element="for-example-link"]').click();
  });
});