class CreateAsset {

    static getUrl() {
        return cy.url()
    }

    static floor(){
    cy.contains('Floor')
        .click()
        .should('contain', 'DT super duper')
}
    static space(){
        cy.get('[data-row-key="07amtwsJ_"][data-test-selector="floorstable_action_button"]')
            .should('be.visible')
            .click()
            .should ('contain', 'Add Space')

    }
    static addasset(){
        cy.get('[data-test-selector="spacestable_action_button"] > a')
            .should('be.visible')
            .click()
            .should('contain','Tester')
    }

    static popupasset(){
        cy.contains('Add Asset')
            .click()
            .should('contain', 'Select Asset Type')
    }
    static cardrecorder(){
        cy.get('.assetTypes')
            .be.visible()
            .select('Card Readers')
            .should('have.value', 'Card Readers')
    }

    static Quantity (){
        cy.get('#root_Description_Quantity')
            .be.visible()
            .type ('12')
            .should('have.value', '12')
    }
    static Condition (){
        cy.get('#root_Description_Condition')
            .be.visible()
            .select('A')
            .should('have.value', 'A')

    }
    static Dates (){
        cy.get('#root_Others_Install\ Date')
            .be.visible()
            .type('2019')
            .should('have.value', '2019')
    }
    static  submit (){
        cy.contains('Submit')
            .be.visible()
            .click()
    }
    static cancels() {
        cy.contains('Cancel')
            .be.visible()
            .click()
            .should('contain', 'Tester')
    }

    static tables(){
        cy.contains('Card Readers-40452')
            .should('contain', 'Asset Subtype')
        cy.contains('2019')
            .should('contain','Install Date')
        cy.contains(('12'))
            .should ('contain', 'Qty')

    }
}