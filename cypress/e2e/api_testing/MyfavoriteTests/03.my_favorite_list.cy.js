describe('MyfavoriteTests', () => {
    before(() => {
        cy.getAccessToken();
        cy.getAccountToken();
    })
    it('GET-my-favorite-list', () => {
        cy.request({
            method: 'GET',
            url: '/my-favourite/lists',
            headers: {
                authorization: `Bearer ${Cypress.env("account_token")}`,
            },
            qs: {
                'page': Cypress.env('page_no'),
                'size': Cypress.env('page_size'),
                'field': Cypress.env('sort'),
                'order': Cypress.env('order')

            }
        }).as('favorite_list')
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.data.content).to.be.a('array');
                expect(response.body).to.have.property("data");
                expect(response.body).to.have.property("isSuccess");
            })
    })
})