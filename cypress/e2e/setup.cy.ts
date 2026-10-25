import { faker } from '@faker-js/faker';

describe('Test data setup', () => {
  it('update required value and generate test data', () => {
    cy.visit('https://parabank.parasoft.com/parabank/admin.htm')

    // Update required values in the settings page
    cy.get('#initialBalance').clear().type('500')
    cy.get('#minimumBalance').clear().type('100')
    cy.get('#loanProvider').select('Web Service')
    cy.get('#loanProcessor').select('Available Funds')
    cy.get('#loanProcessorThreshold').clear().type('20')
    cy.get('input[value="Submit"]').click()
    cy.contains('Settings saved successfully.').should('be.visible')

    // Generate test data to crate a new user
    const clientData = {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      address: faker.location.street(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      phoneNumber: faker.phone.number(),
      SSN: generateSSN(),
      username: `${faker.internet.username().slice(-5)}_${Date.now().toString().slice(-5)}`,
      password: faker.internet.password()
    }

    // Generate test data to update an existing user
    const updatedClientData = {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      address: faker.location.street(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      phoneNumber: faker.phone.number(),
      SSN: generateSSN()
    };

    // Generate test data for customer care tests
    const customerCareData = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.number(),
      message: "I would like to be contacted in ordrer to talk about a loan request I want to make."
    }

    // Generate user data to transfer funds
    const transferFundsData = {
      name: faker.person.fullName(),
      address: faker.location.street(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      phoneNumber: faker.phone.number(),
      accountNumber: faker.finance.accountNumber(),
      billAmount: Math.floor(Math.random() * 51).toFixed(2)
    }

    // Save generated data to a JSON file
    cy.writeFile('cypress/fixtures/clientData.json', clientData)
    cy.writeFile('cypress/fixtures/updatedClientData.json', updatedClientData)
    cy.writeFile('cypress/fixtures/customerCareData.json', customerCareData)
    cy.writeFile('cypress/fixtures/transferFundsData.json', transferFundsData)
  })
})

function generateSSN() {
  const firstThreeDigits = getRandomIntInclusive(100, 999).toString();
  const middleDigits = getRandomIntInclusive(10, 99).toString();
  const lastFourDigits = getRandomIntInclusive(1000, 9999).toString();
  const ssn = firstThreeDigits + "-" + middleDigits + "-" + lastFourDigits;
  return ssn;
}

function getRandomIntInclusive(min: number, max: number): number {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
