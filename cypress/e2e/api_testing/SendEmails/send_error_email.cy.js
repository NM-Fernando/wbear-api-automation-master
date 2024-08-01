//Do not run this API in PROD or STG server
describe('SendErrorEmail', () => {
    before(() => {
      cy.getAccessToken();
      cy.getAccountToken();
    })
  
    it('POST-send-error-email', () => {
      cy.request({
        method: 'POST',
        url: '/send-error-email',
        headers: {
          authorization: `Bearer ${Cypress.env("account_token")}`,
        },
        body: {
          ERR_CODE: 'checkout',
          ERR_MSG: 'checkout'
        }
      }).as('send_error_email')
        .then((response) => {
          //response: status
          expect(response.status).to.equal(200);
          expect(response.body).to.have.property("isSuccess",true);
          expect(response.body).to.have.property("message","checkout error email sent")
        })
    })
  })