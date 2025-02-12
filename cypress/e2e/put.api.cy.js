/// <reference types="cypress"/>


describe('Alterar Dispositivos', () => {

    it('Alterar um dispositivo', () => {

        //Criando dispositivo
        const Macbook = {
            "name": "Apple MacBook Pro 16",
            "id": 99,
            "data": {
               "year": 2019,
               "price": 1849.99,
               "CPU model": "Intel Core i9",
               "Hard disk size": "1 TB"
            }
         }

         const Macbook_update = {
            "name": "Apple MacBook Pro 16 do Bata",
            "id": 99,
            "data": {
               "year": 2021,
               "price": 2000,
               "CPU model": "Intel Core i9",
               "Hard disk size": "4 TB"
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
        cy.get('@postDeviceResult'). then((response_post) => {
            expect(response_post.status).equal(200)
         
            // Alterando Dispositivo
            cy.request({
                method: 'PUT',
                url: '/objects/99',
                failOnStatusCode: false,
                body: Macbook_update
            }).as('putDeviceResult')
                
            //validações do PUT
            cy.get('@putDeviceResult'). then((responsePut) => {
                expect(responsePut.status).equal(200)
            })
        }) 
        
        
    })
})