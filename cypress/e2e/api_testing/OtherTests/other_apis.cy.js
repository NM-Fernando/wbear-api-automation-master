describe('OtherTests', () => {
    it('GET-roles', () => {
        cy.request(
            {
                method: 'GET',
                url: '/registration/get-roles',
            }).as('get_roles')
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.roles).to.be.a('array');
                expect(response.body.roles).to.have.length(26);
                //expect(response.body.roles).to.have.any.keys('code', 'description')
                expect(response.body.roles[0].code).to.be.eql('Y6');
                expect(response.body.roles[0].description).to.be.eql('Accounting Manager');
                expect(response.body.roles[25].code).to.be.eql('Y9');
                expect(response.body.roles[25].description).to.be.eql('Web PA Account');
            })
    })
    
    it('GET-pim-admin-soldto', () => {
        cy.request(
            {
                method: 'GET',
                url: '/pim-admin/soldto-by-uuid?uuid=b1ed6a02-f38c-426f-aa8f-a88c80df6f9f',
            }).as('pim-admin-soldto')
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body).to.be.a('array');
    
            })
    })
    
    it('GET-primary-shipto', () => {
        cy.request(
            {
                method: 'GET',
                url: '/addresses',
                qs:{
                   'soldto': Cypress.env('sold_to')
                },
            }).as('GET-primary-shipto')
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.addresses)
                    .to.be.a('array')
                    .have.length.of.at.least(1);
            })
    })
    
    
    it('POST-password-reset', () => {
        cy.request({
            method: 'POST',
            url: '/auth/password-reset',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: {
                email: Cypress.env('other_user'),
                key: 'login-widget'
            }
        }).as('password-reset')
            .then((response) => {
                //response: status
                expect(response.status).to.equal(201);
                expect(response.body.data).to.have.property("status", "ACTIVE");
                expect(response.body).to.have.property("isSuccess", true);
            })
    })
})