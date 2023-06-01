# Automation Test Suite for GraphQL API

This repository contains the automation test suite for the GraphQL API. The test suite is built using Jest and axios for making HTTP requests to the GraphQL API endpoints.

To run the automation test suite locally, follow these steps:

1. Clone the repository: git clone https://github.com/ar-gizmo/graphql.git
2. Install dependencies: npm install axios jest
3. Start the GraphQL API server
4. Run the test suite: 
    List roles 
         npx jest listRoles.test.js

    Create new role 
         npx jest createNewRole.test.js