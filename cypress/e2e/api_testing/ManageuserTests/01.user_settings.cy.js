describe('ManageuserTests', () => {
    before(() => {
        cy.getAccessToken();
        cy.getAccountToken();
    })
    it('GET-user-settings', () => {
        cy.request({
            method: 'GET',
            url: '/user-settings',
            headers: {
              authorization: `Bearer ${Cypress.env("account_token")}`,
            }
          }).as('user_settings')
            .then((response) => {
                  expect(response.status).to.equal(200);
                  expect(response.body.logoff_timeout).to.be.oneOf([900,10,60]);
                  expect(response.body).to.have.property("truck_willcall");
                  expect(response.body).to.have.property("pricing_options");
            })
    })
})