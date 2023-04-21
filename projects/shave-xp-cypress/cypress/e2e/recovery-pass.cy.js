import ForgotPassPage from '../support/pages/views/Forgot-pass'
import RpPages from '../support/pages/views/Reset-pass'
import LoginPage from '../support/pages/views/Login';
import ShaversPage from '../support/pages/views/Shavers'

describe('Esqueci minha senha', ()=>{
    

    it('deve permitir o resgate de Senha', () => {

        const user = {
            name:'Esqueci a Senha',
            email:'esqueci@gmail.com',
            password:'123456',
            is_shaver: false
        }
        cy.createUser(user)

        
        const expectedText = 'Enviamos um e-mail para confirmar a recuperação de senha, verifique sua caixa de entrada.'
        ForgotPassPage.go()
        ForgotPassPage.submit(user.email)
        ForgotPassPage.noticeShouldBe(expectedText)
    });

    context('Quando o usuário solicita uma nova senha', ()=>{

        const user = {
            name:'Esqueci a Senha',
            email:'esqueci@gmail.com',
            password:'123456',
            is_shaver: false
        }
        beforeEach(()=>{
            cy.createUser(user)
            cy.forgotPassword(user.email)
            cy.resetPassword(user.email)

        })
        it('deve poder cadastrar uma nova senha',()=>{

           const newPassword = '987654'
            
            RpPages.go(Cypress.env('passToken'))
            RpPages.submit(newPassword,newPassword)
    
        })
        afterEach(()=>{
            LoginPage.submit(user.email,987654)
            ShaversPage.header.userShouldBeLoggedIn(user.name)

        })

    })





})