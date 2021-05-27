/// <reference types="cypress" />

import locators from './locators'

Cypress.Commands.add('inserirEmail', ()=>{
    cy.get(locators.LOGIN.USER)
})

Cypress.Commands.add('inserirSenha', ()=>{
    cy.get(locators.LOGIN.PASSWORD)
})

Cypress.Commands.add('acionarBtnEntrar', ()=>{
    cy.get(locators.LOGIN.BTN_LOGIN).click()
})

Cypress.Commands.add('mensagemSucesso', ()=>{
    cy.get(locators.MESSAGE,{timeout:15000})
})

