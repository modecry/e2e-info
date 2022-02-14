function getComponentByDataAttr(componentNane) {
  return cy.get(`[data-cypress-element="${componentNane}"]`);
}