import RegisterPage from '../support/pages/views/Register'
import data from '../fixtures/register.json'
describe('Register', ()=>{


    context('Cadastrar um novo usuário', ()=>{
        

        it('deve cadastrar o usuário com sucesso', ()=>{

            const user = data.success 

            cy.task('removeUser', user.email).then(function(result){
                cy.log(result)
            })

            const message = 'Boas vindas, faça login para solicitar serviços!'
            
            RegisterPage.submit(user.name,user.email,user.password)
            RegisterPage.shared.noticeSucessShouldBe(message)

        }),
        it('Não pode cadastrar usuário duplicado', ()=>{

            const user = data.sameEmail
            const message= 'Oops! E-mail já cadastrado.'

            RegisterPage.submit(user.name,user.email,user.password)
            RegisterPage.shared.noticeErrorShouldBe(message)

        }),
        it('Validação dos campos obrigatórios', ()=>{

        
            const nomeMessage = 'Nome é obrigatório'
            const emailMessage = 'E-mail é obrigatório'
            const passwordMessage = 'Senha é obrigatória'
            RegisterPage.submit()
            RegisterPage.requiredFields(nomeMessage,emailMessage,passwordMessage)

        })

    })
    context('Não deve cadastrar usuário com a Senha muito curta', ()=>{

        const user = {
            email:'galvaocruz16@jmail.com',
            nome:'Eduardo Galvão'
        }

        const passwords = data.shortpass
        const text = 'Pelo menos 6 caracteres'
       
        passwords.forEach((p) => {
            it(`não deve criar com a senha: ${p}`, () => {
                RegisterPage.submit(user.nome,user.email,p)
                RegisterPage.shared.alertShouldBe(text)
            })
        })
    })
    context('Não deve cadastrar um usuário com o E-mail fora do padrão',()=>{

        const user = {
            password:'cDz#2020',
            nome:'Eduardo'
        }
        const emails = data.shortpass

        const text = 'Informe um email válido'

        emails.forEach((e) => {
            it(`não deve criar com o email: ${e}`, () => {
                RegisterPage.submit(user.nome,e,user.password)
                RegisterPage.shared.alertShouldBe(text)
            })
        })

    })
})