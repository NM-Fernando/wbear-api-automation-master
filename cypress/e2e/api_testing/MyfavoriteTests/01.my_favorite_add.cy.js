describe('MyfavoriteTests', () => {
  before(() => {
    cy.getAccessToken();
    cy.getAccountToken();
  })

  it('POST-my-favorite-add', () => {
    cy.request({
      method: 'POST',
      url: '/my-favourite/add',
      headers: {
        authorization: `Bearer ${Cypress.env("account_token")}`,
      },
      body: {
        sku: Cypress.env('favorite_sku'),
        categoryId: '53565',
        categoryName: 'Tooling',
        subCategoryId: '53628',
        subCategoryName: 'Router Bits',
        brandId: '100007',
        brandName: 'Amana'
      }
    }).as('favorite_add')
      .then((response) => {
        //response: status
        expect(response.status).to.equal(201);
      })
  })
})