Cypress.Commands.add('getAccessToken', () => {
    let access_token = Cypress.env("access_token");
    if (!access_token) {
        return cy.request(
            {
                method: 'POST',
                url: '/auth/generate-token',
                body: {
                    userName: Cypress.env('user_name'),
                    password: Cypress.env('password')
                },
            }).then((response) => {
                access_token = response.body.token;
                //cy.log(access_token);
                Cypress.env("access_token", access_token);
            })
    }
    return;
})


Cypress.Commands.add('getAccountToken', () => {
    let account_token = Cypress.env("account_token");
    if (!account_token) {
        return cy.request({
            method: 'POST',
            url: '/account-select',
            headers: {
                authorization: `Bearer ${Cypress.env("access_token")}`,
            },
            body: {
                "ship-to": Cypress.env('ship_to'),
                "accountNo": Cypress.env('sold_to')
            }
        }).then((response) => {
            //cy.log(response.body);
            account_token = response.body.token;
            Cypress.env("account_token", account_token);
        })
    }
    return;
});


Cypress.Commands.add('getRegisterToken', () => {
    let register_token = Cypress.env("register_token");
    if (!register_token) {
        const randomemail = "APItest" + Cypress._.random(0, 1e5) + "@villvay.com"
        return cy.request(
            {
              method: 'POST',
              url: '/registration/register',
              body: {
                accountNo: Cypress.env('reg_accno'),
                role: Cypress.env('reg_role'),
                firstName: Cypress.env('firstName'),
                lastName: Cypress.env('lastName'),
                email: randomemail,
                phone_no: Cypress.env('phone')
              },
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            }).then((response) => {
              register_token = response.body.token;
              cy.log(register_token)
              Cypress.env("register_token", register_token);
            })
    }
    return;
});