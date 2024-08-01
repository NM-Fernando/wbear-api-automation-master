describe('FrontEndEndpoints', () => {
    
    it('GET-skugetiteminfo',() =>{
        cy.request({
            method: 'GET',
            url: '/rest/skugetiteminfo?sku=SE901',
          }).as('skugetiteminfo')
            .then((response) => {
                  cy.log(JSON.stringify(response));
                  expect(response.status).to.equal(200);
            })
    })
})
