describe('ManageuserTests', () => {
    before(() => {
        cy.getAccessToken();
        cy.getAccountToken();
    })
    it('PUT-update-other-contacts', () => {
        cy.request({
            method: 'PUT',
            url: '/admin/update_other_contact',
            headers: {
              authorization: `Bearer ${Cypress.env("account_token")}`,
            },
            body: {
              "signed_data": {
                payload: Cypress.env('payload_other'),
                sign: Cypress.env('sign_other')
              },
              update_fields: [{
                field: "last_name",
                value: "testQa1"
              }]
            }
    
          }).as('update_other_contact')
            .then((response) => {
                  expect(response.status).to.equal(200);
            })
    })
})