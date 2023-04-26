import data from '../../fixtures/users.json'

describe('login', () => {

    context('quando submeto o formulário', () => {
        it('deve logar com sucesso', () => {
            const user = data.success 

            cy.createUser(user)
          
            cy.submitLogin(user.email,user.password)
            cy.userShouldBeLoggedIn(user.name)
        })

        it('não deve logar com senha incorreta', () => {
            const user = data.invpass 
            const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'

            cy.submitLogin(user.email,user.password)
            cy.noticeErrorShouldBe(message)

        })

        it('não deve logar com email não cadastrado', () => {
            const user = data.emailinvalid 
            const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
            cy.submitLogin(user.email, user.password)
            cy.noticeErrorShouldBe(message)
        })

        it('campos obrigatórios', () => {
            cy.submitLogin()
            cy.get('.alert-error')
            .should('have.length', 2)
            .and(($small) => {
                expect($small.get(0).textContent).to.equal('E-mail é obrigatório')
                expect($small.get(1).textContent).to.equal('Senha é obrigatória')
            })
        })
    })

    context('senha muito curta', () => {
        const passwords = [
            '1',
            '12',
            '123',
            '1234',
            '12345'
        ]

        passwords.forEach((p) => {
            it(`não deve logar com a senha: ${p}`, () => {
                

                cy.submitLogin('eduardo@teste.com.br', p)
                cy.alertShouldBe('Pelo menos 6 caracteres')
            })
        })
    })

    context('email no formato incorreto', () => {
        const emails = [
            'galvaocruz16&gmail.com',
            'galvaocruz16.com.br',
            '@gmail.com',
            '@',
            'galvaocruz16@',
            '121323',
            '@#@!#!@',
            'xpto123'
        ]

        emails.forEach((e) => {
            it(`não deve logar com o email: ${e}`, () => {
                cy.submitLogin(e, 'pwd123')
                cy.alertShouldBe('Informe um email válido')
            })
        })
    })
})