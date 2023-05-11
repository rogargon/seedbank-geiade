import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I\'m in the homepage', () => {
  cy.visit('http://localhost:4200');
});

Given('I\'m not logged in', () => {
  cy.get('.nav-link').contains('Login');
});

Given('I log in as {string} with password {string}', (username, password) => {
  cy.get('.nav-link').contains('Login').click();
  cy.get('#username').type(username).blur();
  cy.get('#password').type(password).blur();
  cy.get('button').contains('Submit').click();
});

Given('I click the {string} dropdown', (option) => {
  cy.get('.nav-link').contains(option).click();
});

Given('I click the {string} take-dropdown', (option) => {
  cy.get('#takes-list').contains(option).click();
});

Given('I click the Add take button', () => {
  cy.get('#take-button-add').contains('Add').click();
});

Given('I click the Submit button', () => {
  cy.get('#submit').click();
});

Then('The take is created', () => {
  cy.get('.card-title').contains('Take with id');
});
