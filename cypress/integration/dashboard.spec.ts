/// <refetence types="cypress" />
describe('DashBoard', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get("input[placeholder='Email']").type('user1@test.com')
    cy.get("input[placeholder='Password']").type('password')
    cy.get("[type='submit']").click()
    cy.get("[data-testid='logout']").should('be.visible')
  })
  it('Shall Post CRUD works fine', () => {
    cy.get("input[placeholder='New post ?']").type('Post A')
    cy.get("[data-testid='btn-post']").click()
    cy.get("[data-testid='ul-post']").children().should('have.length', 1)
    cy.get("[data-testid='ul-post']").children().should('have.text', 'Post A')
    cy.get("[data-testid='pencil-post']").click()
    cy.get("input[placeholder='New post ?']").type('++')
    cy.get("[data-testid='btn-post']").click()
    cy.get("[data-testid='ul-post']").children().should('have.text', 'Post A++')
  })
})
export {}
