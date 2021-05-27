/// <reference types="cypress" />

import locators from './locators'

Cypress.Commands.add('registroMovimentacoes', () => {
    cy.get(locators.EXTRATO.LINHAS)
})

Cypress.Commands.add('localizarMovimentacao', (desc, value) => {
    cy.xpath(locators.EXTRATO.FN_XP_BUSCA_ELEMENTO(desc, value)).click()
})