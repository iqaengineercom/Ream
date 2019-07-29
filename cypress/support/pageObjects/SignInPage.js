class SignInPage {

    static visit() {
        cy.visit('/')
    }

    static getTitle() {
        return cy.title()
    }

    static fillEmail() {
        const field = cy.get('#email')
        field.clear()
        field.type('surveyor@edgehill.co.uk')
    }

   static fillPassword() {
        const field = cy.get('#password')
        field.clear()
        field.type('Realm34$')
        return this
    }

    static submitCredentials() {
        const button = cy.get('.ant-btn-primary')
        button.click()
    }

    static verifyLoggedIn() {
        const field = cy.get('.topbar___VGc3o')
        field.contains('Home')
        return this
    }


}

export default SignInPage