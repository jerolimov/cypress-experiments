describe('My first test', () => {
  it('visits the Kitchen Sink', () => {
    cy.visit('/')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email')
      .type('fakee@email.com')
      .should('have.value', 'fakee@email.com')
    // cy.screenshot('my-image')
  })
})
