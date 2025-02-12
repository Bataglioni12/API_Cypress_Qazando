/// <reference types="cypress"/>


describe('Buscar Dispositivos', () => {

    it('Buscar um dispositivo específico', () => {

        cy.BuscarDeviceEspecifico(device_id).as('getDeviceResult')

        // validações
        cy.get('@getDeviceResult')
            .then((response) => {
                expect(response.status).equal(200)
                expect(response.body.id).equal(device_id)
                expect(response.body.name).equal('Apple MacBook Pro 16')
                expect(response.body).not.empty
                expect(response.body.data).not.empty
        })
    })
})