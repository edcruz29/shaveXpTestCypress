import  data  from "../fixtures/order.json"
import ShaversPage from "../support/pages/Shavers"
import CatalogPage from "../support/pages/Catalog"
import OrderPage from '../support/pages/Order'


describe('pedido',()=>{

    context("usuario logado",()=>{

        const {customer, shaver, service} = data

        before(()=>{
            cy.createUser(customer)
            cy.apiLogin(customer)
            
        })
        
        it('deve poder solicitar serviços',()=>{
            
            ShaversPage.selectShaver(shaver.name)
            CatalogPage.hasShaver(shaver.name)

            CatalogPage.selectService(service.description)
            CatalogPage.hasTitle(service.description)

            CatalogPage.confirmOrder()
            OrderPage.hasOrder()
            
        })
    })

    
})