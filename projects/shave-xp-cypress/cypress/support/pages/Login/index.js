
class LoginPage{
  
    go(){
        cy.visit('/')
    }
    form(email,password){
        if(email) cy.get('input[placeholder="Seu email"]').type(email)
        if(password) cy.get('input[type="password"]').type(password)
       
    }
    submit(){
        cy.contains('button', 'Entrar').click()
    }
    errorMessage(){
        cy.get('.notice-container').should('be.visible').find('.error p').should('have.text', `Ocorreu um erro ao fazer login, verifique suas credenciais.`)
    }
    checkLoggedUser(user){
        cy.get('a[href="/shavers"]').should('have.text', `Olá, ${user.nome}`)
    }
    alert(text, length){
        cy.get('.alert-error').should('have.length', length).and(($small)=>{
            if(text.email)expect($small.get(0).textContent).to.equal(`${text.email}`)
            if(text.senha)expect($small.get(1).textContent).to.equal(`${text.senha}`)
        })
    }
}
export default new LoginPage()