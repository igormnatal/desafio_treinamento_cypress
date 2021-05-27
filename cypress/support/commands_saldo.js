/// <reference types="cypress" />

import locators from './locators'

Cypress.Commands.add('verificarSaldo', (nome) => {
    cy.xpath(locators.SALDO.FN_XP_SALDO_CONTA('Total'))
})