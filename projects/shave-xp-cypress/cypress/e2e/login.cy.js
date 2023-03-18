import loginPage from '../support/pages/login'
import shaversPage from '../support/pages/shavers'


describe('login', () => {

    context('quando submeto o formulário', () => {
        it('deve logar com sucesso', () => {
            const user = {
                name: 'Eduardo',
                email: 'galvaocruz16@gmail.com',
                password: 'cDz#2020'
            }

            loginPage.submit(user.email, user.password)
            shaversPage.header.userShouldBeLoggedIn(user.name)
        })

        it('não deve logar com senha incorreta', () => {
            const user = {
                name: 'Eduardo',
                email: 'galvaocruz16@gmail.com',
                password: 'cDz#2022'
            }

            loginPage.submit(user.email, user.password)

            const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
            loginPage.noticeShouldBe(message)

        })

        it('não deve logar com email não cadastrado', () => {
            const user = {
                name: 'Eduardo',
                email: 'galvaocruz16@naoexiste.com',
                password: '123456'
            }

            loginPage.submit(user.email, user.password)

            const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
            loginPage.noticeShouldBe(message)
        })

        it('campos obrigatórios', () => {
            loginPage.submit()
            loginPage.requiredFields('E-mail é obrigatório', 'Senha é obrigatória')
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
                loginPage.submit('papito@teste.com.br', p)
                loginPage.alertShouldBe('Pelo menos 6 caracteres')
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
                loginPage.submit(e, 'pwd123')
                loginPage.alertShouldBe('Informe um email válido')
            })
        })
    })
})