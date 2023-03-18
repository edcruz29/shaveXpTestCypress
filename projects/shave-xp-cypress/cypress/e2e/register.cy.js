import RegisterPage from '../support/pages/Register'
describe('login', ()=>{


    context('Crair um novo usuário', ()=>{
        

        it('deve criar o usuário com sucesso', ()=>{

            const user = {
                email:'galvaocruz16@maca.com',
                password:'123456',
                name:'Eduardo Galvão'
            }
            const text = 'Boas vindas, faça login para solicitar serviços!'
            RegisterPage.go()
            RegisterPage.form(user.email,user.password,user.name)
            RegisterPage.submit()
            RegisterPage.message(text)

        }),
        it('Usuário não pode ser duplicado', ()=>{

            const user = {
                email:'galvaocruz16@email.com',
                password:'cDz#2020',
                name:'Eduardo'
            }
            const text= 'Oops! E-mail já cadastrado.'

            RegisterPage.go()
            RegisterPage.form(user.email,user.password,user.name)
            RegisterPage.submit()
            RegisterPage.message(text)

        }),
        it('campos obrigatórios', ()=>{

        
            const nomeMessage = 'Nome é obrigatório'
            const emailMessage = 'E-mail é obrigatório'
            const passwordMessage = 'Senha é obrigatória'
            RegisterPage.go()
            RegisterPage.form()
            RegisterPage.submit()
            RegisterPage.requiredFields(nomeMessage,emailMessage,passwordMessage)

        }),
       
        it('Senha maior ou igual a 6 caracteres', ()=>{

            const user = {
                email:'galvaocruz16@jmail.com',
                password:'a',
                name:'Eduardo Galvão'
            }
            const text = 'Pelo menos 6 caracteres'

            RegisterPage.go()
            RegisterPage.form(user.email,user.password,user.name)
            RegisterPage.submit()
            RegisterPage.alert(text)

        })

    })
    context('Senha muito curta', ()=>{

        const user = {
            email:'galvaocruz16@jmail.com',
            nome:'Eduardo Galvão'
        }

        const passwords = [
            '1',
            '12',
            '123',
            '1234',
            '12345'
        ]
        const text = 'Pelo menos 6 caracteres'
       
        passwords.forEach((p) => {
            it(`não deve criar com a senha: ${p}`, () => {
                RegisterPage.go()
                RegisterPage.form(user.email,p,user.nome)
                RegisterPage.submit()
                RegisterPage.alert(text)
            })
        })
    })
    context.only('E-mail fora do padrão',()=>{

        const user = {
            password:'cDz#2020',
            nome:'Eduardo'
        }
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

        const text = 'Informe um email válido'

        emails.forEach((e) => {
            it(`não deve criar com o email: ${e}`, () => {
                RegisterPage.go()
                RegisterPage.form(e,user.password,user.nome)
                RegisterPage.submit()
                RegisterPage.alert(text)
            })
        })

    })
})