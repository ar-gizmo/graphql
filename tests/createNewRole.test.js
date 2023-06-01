const axios = require('axios');

test('should create a new role', async () => {
  const roleName = 'Test Role';

  const response = await axios.post('https://sz-sdet-task.herokuapp.com/graphql', {
    query: `
      mutation {
        RoleCreateOne(name: "${roleName}") {
          id
          name
        }
      }
    `
  });

  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty('data');
  expect(response.data.data).toHaveProperty('RoleCreateOne');
  expect(response.data.data.RoleCreateOne).toHaveProperty('id');
  expect(response.data.data.RoleCreateOne).toHaveProperty('name', roleName);
});
