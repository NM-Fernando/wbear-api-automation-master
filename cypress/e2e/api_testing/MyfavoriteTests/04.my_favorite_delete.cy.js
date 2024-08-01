describe('MyfavoriteTests', () => {
    before(() => {
        cy.getAccessToken();
        cy.getAccountToken();
    })
    it('DELETE-my-favorite', () => {
        cy.request({
            method: 'DELETE',
            url: '/my-favourite/delete',
            headers: {
                authorization: `Bearer ${Cypress.env("account_token")}`,
            },
            body: {
                sku: Cypress.env('favorite_sku'),
            }
        }).as('favorite_delete')
            .then((response) => {
                //response: status
                expect(response.status).to.equal(200);
            })
    })
})