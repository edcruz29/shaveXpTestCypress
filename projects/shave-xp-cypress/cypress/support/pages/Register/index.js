
class RegisterPage{
    
    go(){
        cy.visit('/signup')
    }
    form(user){
        if(user.name) cy.get('input[placeholder="Nome completo"]').type(user.name)
        if(user.email) cy.get('input[placeholder="Seu melhor email"]').type(user.email)
        if(user.password) cy.get('input[type="password"]').type(user.password)
       
    }
    submit(){
        cy.contains('button', 'Cadastrar').click()
    }
    message(text){
        cy.get('.notice').should('be.visible').find('p').should('have.text',text)
    }
    alert(text){
        cy.get('.alert').should('be.visible').find('.alert-error').should('have.text', text)
    }
}
export default new RegisterPage()