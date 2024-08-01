describe('FrontEndEndpoints', () => {
    
    it('GET-landingInfo',() =>{
        cy.request({
            method: 'GET',
            url: '/cloudsearch/info',
          }).as('cloudsearch-info')
            .then((response) => {
                  cy.log(JSON.stringify(response));
                  //response: status
                  expect(response.status).to.equal(200);
            })
    })
})
