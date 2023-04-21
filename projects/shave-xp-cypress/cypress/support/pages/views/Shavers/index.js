import header from '../../components/header'
class ShaverPage{
   
  constructor(){
    this.header = header

  }
  selectShaver(name) {
    cy.contains('figcaption h3', name)
        .should('be.visible')
        .click()
}
   
   
}
export default new ShaverPage()