const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  e2e: {
    baseUrl: 'http://wurth-pim.villvay.com/api/pim/webservice',
    env:
    {
      user_name: 'rifka@villvay.com',
      password: 'Uy9YKzNMc2tEQ3BkZWpoVTNCcnU3RXpQYnBuUzB2cndSd2RHZmRqMVdVL003WkpCVDZaSWtOUVB2cHA2NkVhSXR2blBmV0xrWTdFSXdvYitDWlJlZDZkNno4c1ozcDV5S284N0dNTFNHZm1ueDYya0ZvNEpiMFkwQ09BQ3JVblduaXdpMHlmV0NpL1VDTTQzcDdhOU02M3hIYWMwSXM2RzF4aEFpeS84MU4vd1BwMXBkZ1dMd3BDYnB3N0cycGVYU3ViZzJrKzVZY1AvL09wZ1lrZGhpVTVVZEUvSTdLd0lFQTFaVjB5aXlJZUI5TjhVY1pnSzFSSHlkY2hzVkNjTzV4VTFMOTRzQlRiYnBMTzUvK1V5Q2RnWVc2NXQwKzVuWWROWHNycDZHVTNUMDZGN3NBRHVtRFB2OHJtTy80TldheEZIS2I1M0gxK1ZsVFNWeTZ5UGF3PT06cmlma2FAdmlsbHZheS5jb20=',
      sold_to: '999999',
      ship_to: '999999',
      favorite_sku: 'AN47102',
      firstName: 'CypressAPI',
      lastName: 'Test',
      reg_accno: '441716',
      reg_role: 'Y6',
      phone: '1234343222',
      from_date: '2019-08-04',
      to_date: '2023-02-13',
      permission: 'Buyer',
      payload_your: 'eyJ1dWlkIjoiNTUyMWYxN2YtNDlkNC00MDQxLWJhN2QtZmY2MWY4ZWIwMGNhIiwicGltaWQiOiI2MWQ4MTk5YzdhMzg5Iiwic3RhdHVzIjoiQUNUSVZFIiwiZmlyc3ROYW1lIjoiUmlma2EiLCJsYXN0TmFtZSI6Ikhhc2hpbSIsInBlcm1pc3Npb24iOiJBRE1JTiIsInJvbGVDb2RlIjoiWTMiLCJyb2xlRGVzY3JpcHRpb24iOiJBY2NvdW50cyBQYXlhYmxlIiwiZW1haWwiOiJyaWZrYUB2aWxsdmF5LmNvbSIsInNvbGRUb1N0YXR1cyI6IkFDVElWRSJ9',
      payload_other: 'eyJ1dWlkIjoiMzFjMzIwYjItOTUzMC00NTdkLWIzZDgtYTkwODc1YjFhZWRiIiwicGltaWQiOiI2Mjc4YzJhNTRhODZmIiwic3RhdHVzIjoiQUNUSVZFIiwiZmlyc3ROYW1lIjoidGVzdCIsImxhc3ROYW1lIjoidGVzdFFhIiwicGVybWlzc2lvbiI6IkJVWUVSIiwicm9sZUNvZGUiOiJNNiIsInJvbGVEZXNjcmlwdGlvbiI6IkFjY3RzIFBheWFibGUgQ29udGFjIiwiZW1haWwiOiJuYWRlZWthLnZpbGx2YXlAZ21haWwuY29tIiwic29sZFRvU3RhdHVzIjoiQUNUSVZFIn0=',
      sign_your: 'Fh8hxu+8GVUxJTb1Ll6SQO3Sjcrb8FsRBi4YW94tK/5hUhyCBVCMjKbyUYpTjjKSra70dSAgXYZSJK79oHB+YrVpfP5uOa56iAVpG8mnn0dV1UY5J1ObO1699GXCKnBLqOyWjAIICFt7h2PzVm3kd14hMP4GEG7+XJ5FAsIfDtF6mlRHMaVOn0CqSqmBUw0qUF7cu5qMiV0jrX3LfNm2ohmy+tSe62m26MC4roeM/WUBKxiDTvd15dRCmyqtuSULStW6efDe9QpcKSeXxQ4ecr/ituRJGAzsamoUsiOycTL5wiIcvb0YFaKV2gqLUorwmm5Sx0+WyR8EZdc1TAfyNg==',
      sign_other: 'rF8i4FncJhqEZgyNbTZpmj2TzqhI0arud8LR/iNYkFCkl7lvl/d9SVCaBw/znOsmEmKK1KlClRD8ehAwpIz/+5Foi/qF70guzTI1QM/bL8pl8PDIZEL0q/a7aMrEQEZy4+T+SGpJvkztJ6hSMvRBYqiunebhwDhXbKs+zXmGUMsxBlGr5Be5eGR+EqP12mIwvRstcWMzUIAyIJH68g8k02UVfKAnH653XxUhrLjtOjX/Xhg96zv1AyuEQF1CtqgdfdN9PZIWjSl+Bf+8Kq0gxWpoIXdVduE8y3HMT60V5zQG9SIgdy4L1OoAtk2KXBULhCOiUxwhfWBa361r/Dg/zA==',
      other_user: 'nadeeka@villvay.com',
      order_no: '200812746',
      page_no: '0',
      page_size: '10',
      sort: 'orderDate',
      order: 'desc'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
  },
});
