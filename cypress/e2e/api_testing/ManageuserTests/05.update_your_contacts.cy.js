describe('ManageuserTests', () => {
    before(() => {
        cy.getAccessToken();
        cy.getAccountToken();
    })
    it('PUT-update-your-contacts', () => {
        cy.request({
            method: 'PUT',
            url: '/update_your_contact',
            headers: {
                authorization: `Bearer ${Cypress.env("account_token")}`,
            },
            body: {
                signed_data: {
                    payload: Cypress.env('payload_your'),
                    sign: Cypress.env('sign_your')
                },
                update_fields: [{
                    field: "last_name",
                    value: Cypress.env('lastName')
                }]
            }

        }).as('update_your_contact')
            .then((response) => {
                expect(response.status).to.equal(200);
            })
    })
})