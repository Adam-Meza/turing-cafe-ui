import { beforeEach } from "mocha"

describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      fixture: 'reservations.json'
    })
  })

  it('should display home page', () => {
    cy.visit('http://localhost:3000')
      .get('.App')
      .get('.app-title').should('have.text', 'Turing Cafe Reservations')

    cy.get('.form')
      .get('#name')
      .get('#time')
      .get('#date')
      .get('#number')

    cy.get('.card')
      .should('have.length', 9)
  })

  it('should be able type in information and value reflect it', () => {
    cy.visit('http://localhost:3000')
      .get('#name')
      .type('test-name')
      .should('have.value', 'test-name')

      .get('#time')
      .type('3:50 pm')
      .should('have.value', '3:50 pm')

      .get('#date')
      .type('05/30')
      .should('have.value', '05/30')

      .get('#number')
      .type('3')
      .should('have.value', '3')
  })

  it('should be able to submit', () => {
    cy.visit('http://localhost:3000')
      .get('#name')
      .type('test-name')
      .should('have.value', 'test-name')

      .get('#time')
      .type('3:50 pm')
      .should('have.value', '3:50 pm')

      .get('#date')
      .type('05/30')
      .should('have.value', '05/30')

      .get('#number')
      .type('3')
      .should('have.value', '3')

      .get('.submit-button').click()

    cy.get('.card')
      .should('have.length', 10)

  })
})