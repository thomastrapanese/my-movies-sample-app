import {
  getBtnShowGrid,
  getCardDeleteButton,
  getCardList,
  getTable,
  getTableRowDeleteButton,
  getTableRowList,
} from '../support/app.po';
import 'cypress-file-upload';

describe('movies-app', () => {
  beforeEach(() => {
    cy.fixture('movies_list.json').then((value) => {
      cy.log(JSON.stringify(value));
      localStorage.setItem('movies', JSON.stringify(value));
    });
    cy.visit('/');
  });

  it('should remove item in card mode', () => {
    cy.viewport('macbook-16');
    getCardList().should('have.length', 4);
    getCardDeleteButton(1).should('exist').click();
    getCardList().should('have.length', 3);
    getCardDeleteButton(1).should('exist').click();
    getCardList().should('have.length', 2);
  });

  it('should remove item in grid mode', () => {
    cy.viewport('macbook-16');
    getBtnShowGrid().click();
    getTable().should('exist');
    getTableRowList().should('have.length', 4);
    getTableRowDeleteButton(1).should('exist').click();
    getTableRowList().should('have.length', 3);
    getTableRowDeleteButton(1).should('exist').click();
    getTableRowList().should('have.length', 2);
  });
});
