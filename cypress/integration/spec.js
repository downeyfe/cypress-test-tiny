describe('Describe Test', () => {
  it('renders page', () => {
    cy.visit('www.google.com')
    cy.title().should('equal', 'Google');
  });
});