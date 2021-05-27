/// <reference types="cypress" />

import locators from './locators'

Cypress.Commands.add('acessarMenuConta', () => {
    cy.get(locators.MENU.SETTINGS).click()
    cy.get(locators.MENU.CONTAS).click()
})

Cypress.Commands.add('inserirConta', conta  => {
    cy.get(locators.CONTAS.NOME).type(conta)
    cy.get(locators.CONTAS.BTN_SALVAR).click()
})

Cypress.Commands.add('alterarConta', (nome) => {
    cy.xpath(locators.CONTAS.FN_XP_BTN_ALTERAR('Conta para alterar')).click()
})

Cypress.Commands.add('alterarNomeConta', conta  => {
    cy.get(locators.CONTAS.NOME).clear().type('Conta Alterada')
    cy.get(locators.CONTAS.BTN_SALVAR).click()
})
