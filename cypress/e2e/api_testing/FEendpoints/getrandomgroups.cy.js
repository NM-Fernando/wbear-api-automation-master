describe('FrontEndEndpoints', () => {
    
    it('GET-getrandomgroups',() =>{
        cy.request({
            method: 'GET',
            url: '/rest/getrandomgroups',
          }).as('getrandomgroups')
            .then((response) => {
                  cy.log(JSON.stringify(response));
                  expect(response.status).to.equal(200);
                  expect(response.body[0].brand.name).to.eq('Rev-A-Shelf');
                  expect(response.body[0].brand.color).to.eq('#911b1b');
                  expect(response.body[0].brand.logo).to.eq('/Brand%20Logos/27286/image-thumb__27286__frontBrand/logo_Rev-A-Shelf.png');
                  expect(response.body[0].brand.code).to.eq('100085');

            })
    })
})
