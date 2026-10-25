describe('Test data setup', () => {
  it('update required value', () => {
    cy.visit('https://parabank.parasoft.com/parabank/admin.htm')

    cy.get('#initialBalance').clear().type('500')
    cy.get('#minimumBalance').clear().type('100')
    cy.get('#loanProvider').select('Web Service')
    cy.get('#loanProcessor').select('Available Funds')
    cy.get('#loanProcessorThreshold').clear().type('20')
    cy.get('input[value="Submit"]').click()
    cy.contains('Settings saved successfully.').should('be.visible')
  })
})