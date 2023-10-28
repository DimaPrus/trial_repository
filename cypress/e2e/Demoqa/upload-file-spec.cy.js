/// <reference types='Cypress' />

describe('Upload files suite', () => {
    it('Handling file uploading', () => {
        cy.visit('/upload-download')
        cy.get('#uploadFile').selectFile('cypress/fixtures/image.png');
    })
})