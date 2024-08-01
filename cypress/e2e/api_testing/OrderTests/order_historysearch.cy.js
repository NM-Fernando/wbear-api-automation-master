describe('OrderTests', () => {
    before(() => {
        cy.getAccessToken();
        cy.getAccountToken();
    })
    it('GET-order-historysearch', () => {
        cy.request({
            method: 'GET',
            url: '/order-history/search',
            headers: {
                authorization: `Bearer ${Cypress.env("account_token")}`,
            },
            qs: {
                'orderNo': Cypress.env('order_no'),
                'page': Cypress.env('page_no'),
                'size': Cypress.env('page_size'),
                'sort': Cypress.env('sort'),
                'order': Cypress.env('order')
            }
        }).as('detailed_order')
            .then((response) => {
                expect(response.status).to.equal(200);
            })

    })
})