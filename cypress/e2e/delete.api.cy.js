/// <reference types="cypress"/>


describe('Deletar Dispositivos', () => {

    it('Deletar um dispositivo', () => {

        //Criando dispositivo
        const Macbook = {
            "name": "Apple MacBook Pro 16",
            "data": {
               "year": 2019,
               "price": 1849.99,
               "CPU model": "Intel Core i9",
               "Hard disk size": "1 TB"
            }
         }

        cy.request({
            method: 'POST',
            url: '/objects',
            failOnStatusCode: false,
            body: Macbook
        }).as('postDeviceResult')

        //Validando Criação 
         //validações
         cy.get('@postDeviceResult'). then((response) => {
            expect(response.status).equal(200)
         })
         
        // Deletando sipositivo
        cy.request({
            method: 'DELETE',
            url: '/objects/${response.body.id}',
            failOnStatusCode: false
        }).as('deleteDeviceResult')
            
        //validações
        cy.get('@postDeviceResult'). then((responseDelete) => {
            expect(responseDelete.status).equal(200)
         })

        
        
    })
})