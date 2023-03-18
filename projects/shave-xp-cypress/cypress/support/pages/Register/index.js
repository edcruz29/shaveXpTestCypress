
class RegisterPage{
    constructor() {
        this.alertError = '.alert-error'
    }
    
    go(){
        cy.visit('/signup')
    }
    form(email, password,nome){
        if(nome) cy.get('input[placeholder="Nome completo"]').type(nome)
        if(email) cy.get('input[placeholder="Seu melhor email"]').type(email)
        if(password) cy.get('input[type="password"]').type(password)
       
    }
    submit(){
        cy.contains('button', 'Cadastrar').click()
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
    message(text){
        cy.get('.notice').should('be.visible').find('p').should('have.text',text)
    }
    alert(text){
        cy.get('.alert').should('be.visible').find('.alert-error').should('have.text', text)
    }
}
export default new RegisterPage()