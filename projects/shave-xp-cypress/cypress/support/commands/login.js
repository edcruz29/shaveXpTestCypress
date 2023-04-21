Cypress.Commands.add('submitLogin',(email = null, password = null)=>{

    
        cy.visit('/')

        cy.get('input[placeholder$=email]').as('email')
        cy.get('input[placeholder*=senha]').as('password')

        if (email) {
            cy.get('@email').type(email)
        }

        if (password) {
            cy.get('@password').type(password)
        }

        cy.contains('button', 'Entrar')
            .click()
    
})