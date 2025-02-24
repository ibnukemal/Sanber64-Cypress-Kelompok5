import editAccountInformationPage from "../../../support/page-objects/editAccountInformationPage"

describe('My Accout > Edit Account Informstion', () => {
    it('Edit Account Information successfully', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
        cy.get('#email').type('halotester1@mail.com')
        cy.get('#pass').type('Halo12345$')
        cy.get('#send2').click()
        cy.get(editAccountInformationPage.logo).should('be.visible')
        cy.get(editAccountInformationPage.see_homepage).should('have.text', 'Home Page')
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click()
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
        cy.get('#firstname').type('Arta')
        cy.get('#lastname').type('Hutapea')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('.message-success > div').should('have.text', 'You saved the account information.')

    })

    it('Edit Account Information by Entering Blank Data', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
        cy.get('#email').type('halotester1@mail.com')
        cy.get('#pass').type('Halo12345$')
        cy.get('#send2').click()
        cy.get(editAccountInformationPage.logo).should('be.visible')
        cy.get(editAccountInformationPage.see_homepage).should('have.text', 'Home Page')
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click()
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
        cy.get('#firstname').clear();
        cy.get('#lastname').clear();
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('#firstname-error').should('have.text', 'This is a required field.')
        cy.get('#lastname-error').should('have.text', 'This is a required field.')
    })

    it('Edit Account Information only Fill in the First Name', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
        cy.get('#email').type('halotester1@mail.com')
        cy.get('#pass').type('Halo12345$')
        cy.get('#send2').click()
        cy.get(editAccountInformationPage.logo).should('be.visible')
        cy.get(editAccountInformationPage.see_homepage).should('have.text', 'Home Page')
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click()
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
        cy.get('#firstname').type('Arta');
        cy.get('#lastname').clear();
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('#lastname-error').should('have.text', 'This is a required field.')
    })

    it('Edit Account Information only Fill in the Last Name', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
        cy.get('#email').type('halotester1@mail.com')
        cy.get('#pass').type('Halo12345$')
        cy.get('#send2').click()
        cy.get(editAccountInformationPage.logo).should('be.visible')
        cy.get(editAccountInformationPage.see_homepage).should('have.text', 'Home Page')
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click()
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
        cy.get('#firstname').clear();
        cy.get('#lastname').type('Hutapea');
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('#firstname-error').should('have.text', 'This is a required field.')
    })


})