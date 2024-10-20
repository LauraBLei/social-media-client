// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('LoginCredentials', () => {
  cy.get('#loginEmail').type('tompe@stud.noroff.no');
  cy.wait(500);
  cy.get('#loginPassword').type('tompelompe');
});

Cypress.Commands.add('invalidLoginCredentials', () => {
  cy.get('#loginEmail').type('tompe@stud.noroff.no');
  cy.wait(500);
  cy.get('#loginPassword').type('tompelompe1234');
  cy.wait(500);
});

Cypress.Commands.add('loginSubmit', () => {
  cy.get('#loginForm').find('button[type="submit"]').click();
  cy.wait(500);
});

Cypress.Commands.add('registerForm', () => {
  cy.get('#registerForm').find('button[data-auth=login]').click();
  cy.wait(500);
});
