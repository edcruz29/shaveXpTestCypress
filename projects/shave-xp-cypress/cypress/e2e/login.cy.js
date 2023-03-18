import loginPage from '../support/pages/Login'
import shaverPage from '../support/pages/Shavers'

describe('login', ()=>{


    context('quando submeto o formulário', ()=>{
        

        it('deve logar com sucesso', ()=>{

                const email='galvaocruz16@gmail.com'
                const password='cDz#2020'
            
        

            loginPage.go()
            loginPage.form(email,password)
            loginPage.submit()
            shaverPage.header.checkLoggedUser(user)

        }),
        it('Não deve logar com senha incorreta', ()=>{

            const user = {
                email:'galvaocruz16@gmail.com',
                password:'cDz@2020',
                nome:'Eduardo'
            }

            loginPage.go()
            loginPage.form(email,password)
            loginPage.submit()
            loginPage.errorMessage()

        }),
        it('Não deve logar com email não cadastrado', ()=>{

            const user = {
                email:'maminha@ymail.com',
                password:'123456',
                nome:'Eduardo'
            }

            loginPage.go()
            loginPage.form(user)
            loginPage.submit()
            loginPage.errorMessage()

        }),
        it('Não deve logar com email invalido', ()=>{

            const user = {
                email:'galvaocruz16',
                password:'cDz#2020',
                nome:'Eduardo'
            }
            const text ={
                email:'Informe um email válido',
            
            }
            const length = 1

            loginPage.go()
            loginPage.form(user)
            loginPage.submit()
            loginPage.alert(text,length)
           

        }),
        it('campos obrigatórios', ()=>{

            const user = {
    
                nome:'Eduardo'
            }
            const text ={
                email:'E-mail é obrigatório',
                senha:'Senha é obrigatória'
            }
            const length = 2

            loginPage.go()
            loginPage.form(user)
            loginPage.submit()
            loginPage.alert(text,length)

        })

    })
    context.only('senha muito curta',()=>{
    
        const  passwords = [ 'c',
            'cD',
            'cDz',
            'cDz#',
            'cDz#2']

        passwords.forEach((p)=>{
            it('não deve logar com a senha '+ p,()=>{

                loginPage.go()
                loginPage.form('galvaocruz16@gmail.com', p)
                loginPage.submit()
                

                cy.get('.alert-error')
                .should('be.visible')
                .should('have.text','Pelo menos 6 caracteres')
            })

           

        })
    })
})