describe('SystemKafeteryjny', () => {
    it('successfull login', () => {
        cy.visit('https://system.mybenefit.pl/mybenefit/login.html')
        cy.get('[data-test=login__username]').click().type('adrian.wawryczuk@avra.pl')
        cy.get('[data-test=login__password]').click().type('NIEPODAM CI MOJEGO HASLA^')
        cy.get('[data-test=login__confirmation]').click({force: true})
        cy.url().should('eq', 'https://system.mybenefit.pl/mybenefit/employee-start-page.html')
    });
});

