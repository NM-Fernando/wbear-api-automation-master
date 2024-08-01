describe('OrderTests', () => {
    before(() => {
        cy.getAccessToken();
        cy.getAccountToken();
    })
    it('POST-order-historyheader',() =>{
        cy.request({
            method: 'POST',
            url: '/order-history/header',
            headers: {
              authorization: `Bearer ${Cypress.env("account_token")}`,
            },
            body: {
              from: Cypress.env('from_date'),
              to: Cypress.env('to_date'),
              orderType: ["H", "C", "B", "K", "L"],
              po: [],
              jobName: [],
              orderStatus: [],
              page: 0,
              size: 10,
              sort: 'orderDate',
              order: 'desc'
            }
          }).as('order_header')
            .then((response) => {
              //response: status
              expect(response.status).to.equal(200);
              expect(response.body.order_status)
                .to.be.a('array')
                .have.length.of.at.least(1);
              expect(response.body).to.have.property('orderHistoryResponse');          
            })
    })
})