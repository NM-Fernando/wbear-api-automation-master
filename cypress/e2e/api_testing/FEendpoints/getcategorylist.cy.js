describe('FrontEndEndpoints', () => {
    
    it('GET-getcategorylist',() =>{
        cy.request({
            method: 'GET',
            url: '/rest/getcategorylist',
          }).as('getcategorylist')
            .then((response) => {
                  cy.log(JSON.stringify(response));
                  expect(response.status).to.equal(200);
                  expect(response.body[0].id).to.eq(53151);
                  expect(response.body[0].name).to.eq('Abrasives');
                  expect(response.body[0].slug).to.eq('abrasives');
                  expect(response.body[0].shortcode).to.eq('53151');
                  expect(response.body[0].item_count).to.eq(3158079);
                  expect(response.body[0].subcategory[0].subid).to.eq(53175);
                  expect(response.body[0].subcategory[0].name).to.eq('Accessories');
                  expect(response.body[0].subcategory[0].slug).to.eq('accessories');
                  expect(response.body[0].subcategory[0].item_count).to.eq(37);



            })
    })
})
