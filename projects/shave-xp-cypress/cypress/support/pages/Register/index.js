
class RegisterPage{
    constructor() {
        this.alertError = '.alert-error'
    }
    submit(nome=null, email = null, password = null) {
        cy.visit('/signup')

        cy.get('input[placeholder="Nome completo"]').as('nome')
        cy.get('input[placeholder$=email]').as('email')
        cy.get('input[placeholder*=senha]').as('password')

        if (nome) {
            cy.get('@nome').type(nome)
        }

        if (email) {
            cy.get('@email').type(email)
        }

        if (password) {
            cy.get('@password').type(password)
        }

        cy.contains('button', 'Cadastrar')
            .click()
    }
   
    requiredFields(nomeMessage, emailMessage, passwordMessage) {
        cy.get(this.alertError)
            .should('have.length', 3)
            .and(($small) => {
                expect($small.get(0).textContent).to.equal(nomeMessage)
                expect($small.get(1).textContent).to.equal(emailMessage)
                expect($small.get(2).textContent).to.equal(passwordMessage)
            })
    }
    noticeShouldBe(text) {
        cy.get('.notice-container')
            .should('be.visible')
            .find('p')
            .should('have.text', text)
    }

    alertShouldBe(message) {
        cy.get(this.alertError)
            .should('be.visible')
            .should('have.text', message)
    }
}
export default new RegisterPage()