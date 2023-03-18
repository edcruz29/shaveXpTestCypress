import RegisterPage from '../support/pages/Register'
describe('login', ()=>{


    context('Não existe um usuário cadastrado', ()=>{
        

        it('deve criar o usuário com sucesso', ()=>{

            const user = {
                email:'galvaocruz16@maca.com',
                password:'123456',
                name:'Eduardo Galvão'
            }
            const text = 'Boas vindas, faça login para solicitar serviços!'
            RegisterPage.go()
            RegisterPage.form(user)
            RegisterPage.submit()
            RegisterPage.message(text)

        }),
        it('Usuário não pode ser duplicado', ()=>{

            const user = {
                email:'galvaocruz16@email.com',
                password:'cDz#2020',
                name:'Eduardo Galvão'
            }
            const text= 'Oops! E-mail já cadastrado.'

            RegisterPage.go()
            RegisterPage.form(user)
            RegisterPage.submit()
            RegisterPage.message(text)

        }),
        it('Não deve criar o usuário com o campo Nome completo vazio', ()=>{

            const user = {
                email:'galvaocruz16@hmail.com',
                password:'cDz@2020',
      
            }
            const text = 'Nome é obrigatório'
            RegisterPage.go()
            RegisterPage.form(user)
            RegisterPage.submit()
            RegisterPage.alert(text)

        }),
        it('email obrigatório', ()=>{

            const user = {
                
                password:'cDz#2020',
                name:'Eduardo'
            }

            const text = 'E-mail é obrigatório'
            RegisterPage.go()
            RegisterPage.form(user)
            RegisterPage.submit()
            RegisterPage.alert(text)

        }),
        it('Senha obrigatória', ()=>{

            const user = {
                email:'galvaocruz16@gmail.com',
                name:'Eduardo'
            }
            const text = 'Senha é obrigatória'

            RegisterPage.go()
            RegisterPage.form(user)
            RegisterPage.submit()
            RegisterPage.alert(text)
           

        }),
        it('Senha maior ou igual a 6 caracteres', ()=>{

            const user = {
                email:'galvaocruz16@jmail.com',
                password:'a',
                name:'Eduardo Galvão'
            }
            const text = 'Pelo menos 6 caracteres'

            RegisterPage.go()
            RegisterPage.form(user)
            RegisterPage.submit()
            RegisterPage.alert(text)

        }),
        it('Não deve logar com o campo senha vazio', ()=>{

            const user = {
                email:'galvaocruz16@',
                password:'a1234546',
                name:'Eduardo Galvão'
            }
            const text = 'Informe um email válido'

            RegisterPage.go()
            RegisterPage.form(user)
            RegisterPage.submit()
            RegisterPage.alert(text)
        })

    })
})