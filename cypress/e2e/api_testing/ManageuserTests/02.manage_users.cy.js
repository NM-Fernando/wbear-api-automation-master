describe('ManageuserTests', () => {
    before(() => {
        cy.getAccessToken();
        cy.getAccountToken();
    })
    it('GET-manage-users', () => {
        cy.request({
            method: 'GET',
            url: '/manage_users',
            headers: {
              authorization: `Bearer ${Cypress.env("account_token")}`,
            }
          }).as('manage_users')
            .then((response) => {
                  expect(response.status).to.equal(200);
                  expect(response.body.manage_contact.your_profile).to.have.property("email",Cypress.env('user_name'));
                  expect(response.body.manage_contact.your_profile).to.have.property("sold_to_status", "ACTIVE");
                  expect(response.body.manage_contact.your_profile).to.have.property("uuid");
                  expect(response.body.manage_contact.your_profile).to.have.property('pimid');
                  expect(response.body.manage_contact.contact_list).to.be.a('array');
            })
    })
})