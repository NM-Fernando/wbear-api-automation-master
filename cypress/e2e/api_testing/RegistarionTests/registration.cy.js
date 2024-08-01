describe('RegistarionTests', () => {
    before(() => {
        cy.getRegisterToken();
        
    })
    it('POST-Request-approval', () => {
        cy.request({
          method: 'POST',
          url: '/registration/register/request-for-approval',
          headers: {
            authorization: `Bearer ${Cypress.env("register_token")}`,
          },
        }).as('request_approve')
          .then((response) => {
            cy.log(JSON.stringify(response));
            //response: status
            expect(response.status).to.equal(200);
            //expect(response.body).to.have.property("given-name");
          })
      })
})
