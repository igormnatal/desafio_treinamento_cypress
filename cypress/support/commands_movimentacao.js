/// <reference types="cypress" />

import locators from './locators'

Cypress.Commands.add('acessarTelaMovimentacoes', ()=>{
    cy.get(locators.MENU.MOVIMENTACAO).click()
})

Cypress.Commands.add('inserirDescricao', (desc)=>{
    cy.get(locators.MOVIMENTACAO.DESCRICAO).type(desc)
})

Cypress.Commands.add('inserirValor', (valor)=>{
    cy.get(locators.MOVIMENTACAO.VALOR).type(valor)
})

Cypress.Commands.add('inserirInteressado', (interessado)=>{
    cy.get(locators.MOVIMENTACAO.INTERESSADO).type(interessado)
})

Cypress.Commands.add('selecionarConta', ()=>{
    cy.get(locators.MOVIMENTACAO.CONTA).select('Conta para movimentacoes')
})

Cypress.Commands.add('selecionarStatusMovimentacao', ()=>{
    cy.get(locators.MOVIMENTACAO.STATUS).click()
})

Cypress.Commands.add('salvarMovimentacao', ()=>{
    cy.get(locators.MOVIMENTACAO.BTN).click()
})


