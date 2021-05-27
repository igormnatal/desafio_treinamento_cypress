/// <reference types="cypress" />

import locators from './locators'


Cypress.Commands.add('login', ()=>{
    cy.visit('/')
    cy.inserirEmail().type(Cypress.env('user').email)
    cy.inserirSenha().type( Cypress.env('user').senha)
    cy.acionarBtnEntrar()
    cy.mensagemSucesso().should('contain','Bem vindo')
})

Cypress.Commands.add('resetApp', () => {
    cy.get(locators.MENU.SETTINGS).click()
    cy.get(locators.MENU.RESET).click()
})

Cypress.Commands.add('irParaHome', () =>{
    cy.get(locators.MENU.HOME).click()
})