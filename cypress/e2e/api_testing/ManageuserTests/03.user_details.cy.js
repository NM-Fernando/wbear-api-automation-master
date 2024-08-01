describe('ManageuserTests', () => {
    before(() => {
        cy.getAccessToken();
        cy.getAccountToken();
    })
    it('POST-user-details', () => {
        cy.request({
            method: 'POST',
            url: '/user-details',
            headers: {
              authorization: `Bearer ${Cypress.env("account_token")}`,
            },
            body: {
              email: Cypress.env('other_user')
            }
          }).as('user_details')
            .then((response) => {
              //response: status
              expect(response.status).to.equal(200);
              expect(response.body).to.have.property('uuid');
              expect(response.body).to.have.property('status','ACTIVE');
            })
    })
})