const axios = require('axios');

describe('Update Role', () => {
  test('should update an existing role', async () => {
    const roleId = 123; 
    const updatedName = 'Updated Role';

    const response = await axios.post('https://sz-sdet-task.herokuapp.com/graphql', {
      query: `
        mutation {
          RoleUpdateOne(id: ${roleId}, name: "${updatedName}") {
            id
            name
          }
        }
      `
    });

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('data');
    expect(response.data.data).toHaveProperty('RoleUpdateOne');
    expect(response.data.data.RoleUpdateOne).toHaveProperty('id');
    expect(response.data.data.RoleUpdateOne).toHaveProperty('name', updatedName);
  });
});
