class Header{
    checkLoggedUser(user){
        cy.get('a[href="/shavers"]').should('have.text', `Olá, ${user.nome}`)
    }
}
export default new Header