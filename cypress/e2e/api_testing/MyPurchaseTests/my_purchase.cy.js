describe('MyPurchaseTests', () => {
    before(() => {
        cy.getAccessToken();
        cy.getAccountToken();
    })
    it('GET-my-purchase', () => {
        cy.request({
            method: 'GET',
            url: '/order-history/purchase',
            headers: {
              authorization: `Bearer ${Cypress.env("account_token")}`,
            },
            qs:{
              'from':Cypress.env('from_date'),
              'to': Cypress.env('to_date'),
              'page': Cypress.env('page_no'),
              'size': Cypress.env('page_size'),
              'field': Cypress.env('sort'),
              'order': Cypress.env('order')
            }
          
          }).as('purchased_item')
            .then((response) => {
                  expect(response.status).to.equal(200);
            })
    })
})