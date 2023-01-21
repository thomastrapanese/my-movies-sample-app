import {
  getBtnCreate,
  getBtnDialogSave,
  getBtnShowCard,
  getBtnShowGrid,
  getCard,
  getCardGroup,
  getCardList,
  getInputDirector,
  getInputFilePoster,
  getInputTitle,
  getInputYear,
  getMovieDialog,
  getTableRowCell,
  getTableRowCellList,
  getTableRowList,
  getTextAreaSummary,
} from '../support/app.po';
import 'cypress-file-upload';

describe('movies-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should add first item on desktop', () => {
    cy.viewport('macbook-16');
    getBtnCreate().should('exist').click();

    getMovieDialog().should('exist');
    getInputTitle().should('exist').type('Avatar');
    getInputDirector().should('exist').type('James Cameron');
    getInputYear().should('exist').type('2010');
    getTextAreaSummary()
      .should('exist')
      .type(
        "Jake Sully è un marine costretto su una sedia a rotelle che accetta di trasferirsi sul pianeta Pandora (distante 44 anni luce dalla Terra) in sostituzione del fratello morto. Costui era uno scienziato la cui missione era quella di esplorare il pianeta mediante un avatar. Essendo l'atmosfera del pianeta tossica per gli umani sono stati creati degli esseri simili in tutto e per tutto ai nativi che possono essere 'guidati' dall'umano che si trova al sicuro dentro la base. Pandora però non è solo un luogo da studiare. È soprattutto un enorme giacimento di un minerale prezioso per la Terra su cui la catastrofe ecologica ha ridotto a zero le fonti di energia. Uomini d'affari avidi e militari si trovano così uniti nel tentativo di spoliazione del pianeta. C'è però un problema: gli indigeni Na'vi non hanno alcuna intenzione di farsi colonizzare. Il compito iniziale dell'avatar di Jake sarà quello di conoscerne usi e costumi e di farsi accettare all'interno delle loro comunità. Sarà così in grado di riferire se sia possibile sottometterli. Jake conosce così Neytiri, una guerriera Na'vi figlia del capo tribù. Da lei impara a divenire un guerriero molto diverso dal marine che è stato e se ne innamora ricambiato. Da quel momento la sua visione dell'impresa cambia.",
        {
          delay: 0,
        }
      );
    getInputFilePoster().should('exist').attachFile('avatar_poster.jpg');

    getBtnDialogSave().click();

    //CARD TEST
    getCardList().should('have.length', 1);
    getCard(0)
      .should('exist')
      .should('contain.text', 'Avatar')
      .should('contain.text', 'James Cameron')
      .should('contain.text', '2010');
    getBtnShowCard().should('not.exist');
    getCardGroup().should('exist');

    //GRID TEST
    getBtnShowGrid().should('exist').click();
    getTableRowList().should('have.length', 1);
    getTableRowCellList(0).should('have.length', 5);
    getTableRowCell(0, 1).should('contain.text', 'Avatar');
    getTableRowCell(0, 2).should('contain.text', 'James Cameron');
    getTableRowCell(0, 3).should('contain.text', '2010');
  });

  it('should add first item on mobile', () => {
    cy.viewport('iphone-x');
    getBtnCreate().should('exist').click();

    getInputFilePoster().should('exist').attachFile('avatar_poster.jpg');
    getMovieDialog().should('exist');
    getInputTitle().should('exist').type('Avatar');
    getInputDirector().should('exist').type('James Cameron');
    getInputYear().should('exist').type('2010');
    getTextAreaSummary()
      .should('exist')
      .type(
        "Jake Sully è un marine costretto su una sedia a rotelle che accetta di trasferirsi sul pianeta Pandora (distante 44 anni luce dalla Terra) in sostituzione del fratello morto. Costui era uno scienziato la cui missione era quella di esplorare il pianeta mediante un avatar. Essendo l'atmosfera del pianeta tossica per gli umani sono stati creati degli esseri simili in tutto e per tutto ai nativi che possono essere 'guidati' dall'umano che si trova al sicuro dentro la base. Pandora però non è solo un luogo da studiare. È soprattutto un enorme giacimento di un minerale prezioso per la Terra su cui la catastrofe ecologica ha ridotto a zero le fonti di energia. Uomini d'affari avidi e militari si trovano così uniti nel tentativo di spoliazione del pianeta. C'è però un problema: gli indigeni Na'vi non hanno alcuna intenzione di farsi colonizzare. Il compito iniziale dell'avatar di Jake sarà quello di conoscerne usi e costumi e di farsi accettare all'interno delle loro comunità. Sarà così in grado di riferire se sia possibile sottometterli. Jake conosce così Neytiri, una guerriera Na'vi figlia del capo tribù. Da lei impara a divenire un guerriero molto diverso dal marine che è stato e se ne innamora ricambiato. Da quel momento la sua visione dell'impresa cambia.",
        {
          delay: 0,
        }
      );

    getBtnDialogSave().click();

    //CARD TEST
    getCardList().should('have.length', 1);
    getCard(0)
      .should('exist')
      .should('contain.text', 'Avatar')
      .should('contain.text', 'James Cameron')
      .should('contain.text', '2010');
    getBtnShowCard().should('not.exist');
    getCardGroup().should('exist');
  });
});
