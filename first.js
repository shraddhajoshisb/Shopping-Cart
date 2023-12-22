///<referance types = "cypress"/>


describe('My first suit', () =>
{
it('my first case', () =>
{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca')
    cy.wait(3000)
    cy.get('.product:visible').should('have.length', 4)
    cy.get('.products:visible').find('.product').eq(1).contains('ADD TO CART').click()

})
})