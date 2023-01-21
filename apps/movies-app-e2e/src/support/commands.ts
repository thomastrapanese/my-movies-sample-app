// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    findButtonByLabel(label: string): Cypress.Chainable;
    findInputByLabel(label: string): Cypress.Chainable;
    findInputFileByLabel(label: string): Cypress.Chainable;
    findTextAreaByLabel(label: string): Cypress.Chainable;
  }
}

Cypress.Commands.add(
  'findButtonByLabel',
  { prevSubject: 'element' },
  (subject, label) => {
    return cy.wrap(subject).find('ui-button[text="' + label + '"]');
  }
);
Cypress.Commands.add(
  'findInputByLabel',
  { prevSubject: 'element' },
  (subject, key) => {
    return cy
      .wrap(subject, { log: false })
      .find('[ng-reflect-label="' + key + '"] input', { log: false });
  }
);
Cypress.Commands.add(
  'findInputFileByLabel',
  { prevSubject: 'element' },
  (subject, key) => {
    return cy
      .wrap(subject, { log: false })
      .find('[ng-reflect-label="' + key + '"] input[type="file"]', {
        log: false,
      });
  }
);
Cypress.Commands.add(
  'findTextAreaByLabel',
  { prevSubject: 'element' },
  (subject, key) => {
    return cy
      .wrap(subject, { log: false })
      .find('[ng-reflect-label="' + key + '"] textarea', { log: false });
  }
);
