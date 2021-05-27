/// <reference types="cypress" />
describe('Trabalhando com as contas', () => {
    before(() => {
        cy.login('igor.mnatal@gmail.com', '201384')
        cy.resetApp()
    })
    it('Inserir uma Conta - @contas', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Caixa')
        cy.mensagemSucesso().should('contain', 'Conta inserida com sucesso!')
    }); 
     
    it('Alterar uma Conta - @contas', () => {
        cy.acessarMenuConta()
        cy.alterarConta()
        cy.alterarNomeConta()
        cy.mensagemSucesso().should('contain', 'Conta atualizada com sucesso!')
    });

    it('Não deve permitir criar uma conta com mesmo nome @contas', () =>{
        cy.acessarMenuConta()
        cy.inserirConta('Caixa')
        cy.mensagemSucesso().should('contain', 'code 400')
    });

    it('Realizar uma movimentação', {tags:'@movimentacao'},() => {
        cy.acessarTelaMovimentacoes()
        cy.inserirDescricao('Descrição')
        cy.inserirValor('5000')
        cy.inserirInteressado('Igor')
        cy.selecionarConta()
        cy.selecionarStatusMovimentacao()
        cy.salvarMovimentacao()

        cy.mensagemSucesso().should('contain', 'sucesso')

        cy.registroMovimentacoes().should('have.length', 7)
        cy.localizarMovimentacao('Descrição', '5.000,00').should('exist')
    })

    it('Verificar saldo', {tags:'@saldo'}, ()=> {
        cy.irParaHome()
        cy.verificarSaldo('Total').should('contain', '2.314,00')
    })
});