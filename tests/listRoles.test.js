const axios = require('axios');

describe('List Roles', () => {
  test('should return a list of roles', async () => {
    const response = await axios.post('https://sz-sdet-task.herokuapp.com/graphql', {
      query: `
        query {
          Roles {
            id
            name
          }
        }
      `
    });

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('data');
    expect(response.data.data).toHaveProperty('Roles');
    expect(Array.isArray(response.data.data.Roles)).toBe(true);
  });
});
