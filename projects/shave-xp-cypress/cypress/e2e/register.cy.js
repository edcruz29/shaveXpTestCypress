import data from '../fixtures/register.json'
describe('Register', ()=>{


    context('Cadastrar um novo usuário', ()=>{
        

        it('deve cadastrar o usuário com sucesso', ()=>{

            const user = data.success 

            cy.task('removeUser', user.email).then(function(result){
                cy.log(result)
            })

            const message = 'Boas vindas, faça login para solicitar serviços!'
            
            cy.submitRegister(user.name,user.email,user.password)
            cy.noticeSuccessShouldBe(message)

        }),
        it('Não pode cadastrar usuário duplicado', ()=>{

            const user = data.sameEmail
            const message= 'Oops! E-mail já cadastrado.'

            cy.submitRegister(user.name,user.email,user.password)
            cy.noticeErrorShouldBe(message)

        }),
        it('Validação dos campos obrigatórios', ()=>{

           cy.submitRegister()
           cy.get('.alert-error')
                .should('have.length', 3)
                .and(($small) => {
                    expect($small.get(0).textContent).to.equal('Nome é obrigatório')
                    expect($small.get(1).textContent).to.equal('E-mail é obrigatório')
                    expect($small.get(2).textContent).to.equal('Senha é obrigatória')
                })

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
                cy.submitRegister(user.nome,user.email,p)
                cy.alertShouldBe(text)
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
                cy.submitRegister(user.nome,e,user.password)
                cy.alertShouldBe(text)
            })
        })

    })
})