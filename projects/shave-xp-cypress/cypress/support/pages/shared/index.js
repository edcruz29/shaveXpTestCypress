class SharedSteps{

    noticeSucessShouldBe(text) {
        cy.get('.notice-container',{timeout:10000})
            .should('be.visible')
            .find('.success p')
            .should('have.text', text)
    }
    noticeErrorShouldBe(text) {
        cy.get('.notice-container',{timeout:10000})
            .should('be.visible')
            .find('.error p')
            .should('have.text', text)
    }

    alertShouldBe(message) {
        cy.get('.alert-error')
            .should('be.visible')
            .should('have.text', message)
    }
}
export default new SharedSteps()