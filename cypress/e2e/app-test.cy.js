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

    it('should be able type in information', () => {
      cy.visit('http://localhost:3000')
        .get('#name')
        .type('test-name')
        .get('#time')
        .type('test-time')
        .get('#date')
        .type('test-date')
        .get('#number')
        .type('test-number')

    }) 

    
})