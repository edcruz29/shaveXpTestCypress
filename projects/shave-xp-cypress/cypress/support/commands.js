// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import './commands/api'
import './commands/notice'
import './commands/alert'
import './commands/register'
import './commands/login'
import './commands/order'

// import LoginPage from '../support/pages/views/Login'
// import ShaversPage from "../support/pages/views/Shavers"


// Cypress.Commands.add('createUser', (user)=>{
//     cy.log(JSON.stringify(user))

//     cy.request({
//         method: 'POST',
//         url:'http://localhost:8000/user',
//         body: user
//     }).then(function(response){
//         expect(response.status).to.eq(201)
//     })
// })
// Cypress.Commands.add('deleteUser', (user)=>{
//     cy.request({
//         method: 'DELETE',
//         url:'http://localhost:8000/user/' + user.email
//     }).then(function(response){
//         expect(response.status).to.eq(204)
//     })
// })
// Cypress.Commands.add('forgotPassword',(email)=>{
//     cy.request({
//         method: 'POST',
//         url:'http://localhost:3333/password/forgot',
//         body: {email:email}
//     }).then(result =>{
//         expect(result.status).to.eql(204)
        
//     })
// })
// Cypress.Commands.add('resetPassword',(email)=>{
//     cy.request({
//         method: 'GET',
//         url:'http://localhost:8000/token/' + email,
//     }).then(result =>{
//         expect(result.status).to.eql(200)
//         cy.log(result.body.token)
//         Cypress.env('passToken',result.body.token)
//     })
// })
// Cypress.Commands.add('uiLogin',(user)=>{
//             LoginPage.submit(user.email, user.password)
//             ShaversPage.header.userShouldBeLoggedIn(user.name)
// })

// Cypress.Commands.add('apiLogin', (user) => {
//     cy.request({
//         method: 'POST',
//         url: 'http://localhost:3333/sessions/',
//         body: { email: user.email, password: user.password }
//     }).then(response => {
//         expect(response.status).to.eql(200)

//         const {user, token} = response.body

//         window.localStorage.setItem('@ShaveXP:token', token)
//         window.localStorage.setItem('@ShaveXP:user', JSON.stringify(user))
//     })
//     cy.visit('/')
// })