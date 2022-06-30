/// <reference types="Cypress" />

import LoginElements from '../elements/loginElements'
const loginElements = new LoginElements

class LoginPage {

  goToLoginPage() {
    cy.visit('/login')
  }

  buttonClick() {
    cy.get(loginElements.loginButton()).click()
  }

  hasMessage(msg) {
    cy.get('snack-bar-container').should('contain.text', msg) 
  }

  checkEmptyForm(){
    cy.get(loginElements.userInput()).should('be.empty')
    cy.get(loginElements.passwordInput()).should('be.empty')
  }
}

export default LoginPage;