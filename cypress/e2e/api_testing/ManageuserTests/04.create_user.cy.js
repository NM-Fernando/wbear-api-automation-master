describe('ManageuserTests', () => {
    before(() => {
        cy.getAccessToken();
        cy.getAccountToken();
    })
    it('POST-create-user', () => {
        const newuseremail =  "cypressadduser" + Cypress._.random(0, 1e5)+"@villvay.com"
        cy.request({
            method: 'POST',
            url: '/admin/create_user',
            headers: {
              authorization: `Bearer ${Cypress.env("account_token")}`,
            },
            body: {
                first_name: Cypress.env('firstName'),
                last_name: Cypress.env('lastName'),
                job_title: Cypress.env('reg_role'),
                email: newuseremail,
                permission: Cypress.env('permission')
            }
          }).as('create_user')
            .then((response) => {
              expect(response.status).to.equal(201);
            })
    })
})