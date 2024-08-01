describe('OrderTests', () => {
    before(() => {
        cy.getAccessToken();
        cy.getAccountToken();
    })
    it('GET-order-historytracker', () => {
        cy.request({
            method: 'GET',
            url: '/order-history/tracker',
            headers: {
                authorization: `Bearer ${Cypress.env("account_token")}`,
            },
            qs: {
                'orderNo': Cypress.env('order_no')
            }

        }).as('order_tracker')
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body).to.have.property("shipToAddress");
                expect(response.body).to.have.property('orderNo', Cypress.env('order_no'));
            })
    })
})