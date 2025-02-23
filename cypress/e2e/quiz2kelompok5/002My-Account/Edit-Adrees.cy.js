import editAccountInformationPage from "../../../support/page-objects/editAccountInformationPage"

describe('My Accout > Edit Account Informstion', () => {
    it('Edit Address successfully', () => {
        cy.visit('')
        cy.get('#email').type('halotester1@mail.com')
        cy.get('#pass').type('Halo12345$')
        cy.get('#send2').click()
        cy.get(editAccountInformationPage.logo).should('be.visible')
        cy.get(editAccountInformationPage.see_homepage).should('have.text', 'Home Page')
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click()
        cy.get('.box-billing-address > .box-actions > .action > span').click()
        cy.get('#telephone').clear().type('082344343423')
        cy.get('#street_1').clear().type('North Sumatera')
        cy.get('#city').clear().type('Medan')
        cy.get('#region').clear().type('Alaska')
        cy.get('#zip').clear().type('67891')
        cy.get('#country').should('be.visible').select('Indonesia')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('.message-success > div').should('have.text', 'You saved the address.')
        

    })

    it('Edit Address Entering Blank Data', () => {
        cy.visit('')
        cy.get('#email').type('halotester1@mail.com')
        cy.get('#pass').type('Halo12345$')
        cy.get('#send2').click()

        cy.get(editAccountInformationPage.logo).should('be.visible')
        cy.get(editAccountInformationPage.see_homepage).should('have.text', 'Home Page')
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click()
        cy.get('.box-billing-address > .box-actions > .action > span').click()
        cy.get('#telephone').clear()
        cy.get('#street_1').clear()
        cy.get('#city').clear()
        cy.get('#region').clear().type('Alaska')
        cy.get('#zip').clear()
        cy.get('#country').should('be.visible').select('Indonesia')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get(':nth-child(8) > span').should('have.text', "It's a default billing address.")
        cy.get(':nth-child(2) > :nth-child(9) > span').should('have.text', "It's a default shipping address.")
        cy.get('#telephone-error').should('have.text', 'This is a required field.')
        cy.get('#telephone-error').should('have.text', 'This is a required field.')
        cy.get('#street_1-error').should('have.text', 'This is a required field.')
        cy.get('#city-error').should('have.text', 'This is a required field.')
        cy.get('#zip-error').should('have.text', 'This is a required field.')

    })


})