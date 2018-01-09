describe('My First Test', function() {
    it('visit home', function() {
        cy.visit('http://127.0.0.1:3000');
        cy.title().should('include', 'React');
    })
})
