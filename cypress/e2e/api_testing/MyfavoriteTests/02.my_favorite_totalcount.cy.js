describe('MyfavoriteTests', () => {
    before(() => {
        cy.getAccessToken();
        cy.getAccountToken();
    })

    it('GET-my-favorite-totalcount', () => {
        cy.request({
            method: 'GET',
            url: '/my-favourite/total-count',
            headers: {
                authorization: `Bearer ${Cypress.env("account_token")}`,
            }
        }).as('favorite_count')
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.data).to.be.gte(1);
                expect(response.body).to.have.property("isSuccess");
            })
    })
})