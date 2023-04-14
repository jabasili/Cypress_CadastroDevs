describe('Formulário Devs', () => {
    beforeEach(() => cy.visit('../../formulario.html'))
    it('Preenchendoo formulário e submetendo', () => {
        cy.get('#nome').as('name').type('Jader')
        cy.get('#sobrenome').as('LastName').type('Basili')
        cy.get('#email').as('email').type('Jabasili@gmail.com')
        cy.get('input[type=radio][value="fullstack"]').as('fullstackRadio').check()
        cy.get('#senioridade').as('seniority').select('Sênior');
        cy.get('input[type=checkbox][value="HTML"]').as('htmlCheckbox').check()
        cy.get('input[type=checkbox][value="CSS"]').as('cssCheckbox').check()
        cy.get('input[type=checkbox][value="Javascript"]').as('jsCheckbox').check()
        cy.get('.botao').click()

        cy.get('@name').should('be.empty')
        cy.get('@LastName').should('be.empty')
        cy.get('@email').should('be.empty')
        cy.get('@fullstackRadio').should('not.be.checked')
        cy.get('input[type=radio][value=frontend]').should('be.checked')
        cy.get('@seniority').find('option').contains('Selecione').should('be.selected')
        cy.get('@htmlCheckbox').should('not.be.checked')
        cy.get('@cssCheckbox').should('not.be.checked')
        cy.get('@jsCheckbox').should('not.be.checked')
        cy.get('input[type=checkbox][value="PHP"]').should('not.be.checked')
        cy.get('input[type=checkbox][value="C#"]').should('not.be.checked')
        cy.get('input[type=checkbox][value="Python"]').should('not.be.checked')
        cy.get('input[type=checkbox][value="Java"').should('not.be.checked')
    })

    it.only('Preenchendoo formulário e submetendo com comandos personalizados', () => {
        cy.PreenchendooFormulárioESubmetendo()
        cy.AssertPreenchendooFormulárioESubmetendo()
    });

    it('Tem titulo e subtitulo', () => {
        cy.get('#titulo').should('be.visible').and('have.text', 'Cadastro de DEVs')
        cy.get('#subtitulo').should('be.visible').and('have.text', 'Complete suas informações')
    });

})