const url = 'http://localhost:3000/resume/elena'

describe('test resume page', () => {
  it('should have the correct content', () => {
    cy.visit(url)
      .get('h1')
      .should('have.length', 1)
      .should('have.text', 'ELENAȚĂPEAN')
      .get('[cy="rating-level"]')
      .should('have.length', 12)
      .first()
      .find('[cy="rating-dots"] span')
      .should('have.length', 10)
      .get('[cy="rating-level"]')
      .first()
      .find('.rated')
      .should('have.length', 8)
  })
})