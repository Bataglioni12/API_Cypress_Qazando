Cypress.Commands.add('BuscarDeviceEspecifico', (device_id) => {
    cy.request({
        method: 'GET',
        url: `/objects/${device_id}`,  
        failOnStatusCode: false
    }).then((response) => { return response});
});