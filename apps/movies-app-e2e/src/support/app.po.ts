export const getBtnCreate = () =>
  cy.document().get('body').findButtonByLabel('create');
export const getBtnShowGrid = () =>
  cy.document().get('body').findButtonByLabel('show grid');
export const getBtnShowCard = () =>
  cy.document().get('body').findButtonByLabel('show card');

export const getCardGroup = () => cy.document().get('.ui-grid__card-group');
export const getCardList = () => getCardGroup().find('.ui-card');
export const getCard = (index: number) => getCardList().eq(index);
export const getCardEditButton = (index: number) =>
  getCard(index).findButtonByLabel('edit');
export const getCardDeleteButton = (index: number) =>
  getCard(index).findButtonByLabel('delete');
export const getTable = () => cy.document().get('ui-grid table');
export const getTableRowList = () => getTable().find('tbody tr');
export const getTableRow = (index: number) => getTableRowList().eq(index);
export const getTableRowEditButton = (index: number) =>
  getTableRow(index).findButtonByLabel('edit');
export const getTableRowDeleteButton = (index: number) =>
  getTableRow(index).findButtonByLabel('delete');
export const getTableRowCellList = (rowIndex: number) =>
  getTableRow(rowIndex).find('td');
export const getTableRowCell = (rowIndex: number, cellIndex: number) =>
  getTableRowCellList(rowIndex).eq(cellIndex);

/** DIALOG **/
export const getMovieDialog = () => cy.document().get('movies-edit');
export const getInputTitle = () => getMovieDialog().findInputByLabel('title*');
export const getInputDirector = () =>
  getMovieDialog().findInputByLabel('director');
export const getInputYear = () => getMovieDialog().findInputByLabel('year');
export const getTextAreaSummary = () =>
  getMovieDialog().findTextAreaByLabel('summary');
export const getInputFilePoster = () =>
  getMovieDialog().findInputFileByLabel('poster');
export const getBtnDialogSave = () =>
  getMovieDialog().findButtonByLabel('save');
