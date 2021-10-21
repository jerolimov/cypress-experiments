describe('My first test', () => {
  it('visits the kitchen sink', () => {
    cy.visit('/')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email').type('fake@email.com')

    cy.get('.action-email').toMatchSnapshot();

    cy.get('.action-email').toMatchImageSnapshot();

    cy.document().toMatchImageSnapshot();
  })
})
