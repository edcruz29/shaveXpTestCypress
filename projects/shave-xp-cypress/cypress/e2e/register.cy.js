import RegisterPage from '../support/pages/Register'
import data from '../fixtures/register.json'
describe('login', ()=>{


    context('Criar um novo usuário', ()=>{
        

        it('deve criar o usuário com sucesso', ()=>{

            const user = data.success 

            cy.task('removeUser', user.email).then(function(result){
                cy.log(result)
            })

            const text = 'Boas vindas, faça login para solicitar serviços!'
            
            RegisterPage.submit(user.name,user.email,user.password)
            RegisterPage.noticeShouldBe(text)

        }),
        it('Usuário não pode ser duplicado', ()=>{

            const user = data.sameEmail
            const text= 'Oops! E-mail já cadastrado.'

            RegisterPage.submit(user.name,user.email,user.password)
            RegisterPage.noticeShouldBe(text)

        }),
        it('campos obrigatórios', ()=>{

        
            const nomeMessage = 'Nome é obrigatório'
            const emailMessage = 'E-mail é obrigatório'
            const passwordMessage = 'Senha é obrigatória'
            RegisterPage.submit()
            RegisterPage.requiredFields(nomeMessage,emailMessage,passwordMessage)

        })

    })
    context('Senha muito curta', ()=>{

        const user = {
            email:'galvaocruz16@jmail.com',
            nome:'Eduardo Galvão'
        }

        const passwords = data.shortpass
        const text = 'Pelo menos 6 caracteres'
       
        passwords.forEach((p) => {
            it(`não deve criar com a senha: ${p}`, () => {
                RegisterPage.submit(user.nome,user.email,p)
                RegisterPage.alertShouldBe(text)
            })
        })
    })
    context('E-mail fora do padrão',()=>{

        const user = {
            password:'cDz#2020',
            nome:'Eduardo'
        }
        const emails = data.shortpass

        const text = 'Informe um email válido'

        emails.forEach((e) => {
            it(`não deve criar com o email: ${e}`, () => {
                RegisterPage.submit(user.nome,e,user.password)
                RegisterPage.alertShouldBe(text)
            })
        })

    })
})