describe('OrderTests', () => {
    before(() => {
        cy.getAccessToken();
        cy.getAccountToken();
    })
    it('GET-order-history',() =>{
        cy.request({
            method: 'GET',
            url: '/order/history',
            headers: {
              authorization: `Bearer ${Cypress.env("account_token")}`,
            },
            qs:{
              'from':Cypress.env('from_date'),
              'to': Cypress.env('to_date'),
              'email': Cypress.env('user_name'),
              'page': Cypress.env('page_no'),
              'size': Cypress.env('page_size'),
              'sort': Cypress.env('sort')
            }
          }).as('order_history')
            .then((response) => {
                  cy.log(JSON.stringify(response));
                  //response: status
                  expect(response.status).to.equal(200);
            })
    })
})
