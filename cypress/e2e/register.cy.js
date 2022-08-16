const url = 'http://localhost:3000/register'

describe('test register functionality', () => {
    /*const fields = [
        "firstName", "lastName", "email", "password", "role"
    ]*/
    const fields = {
        firstName: 'Cristian',
        lastName: 'Gherghel',
        email: '1@gmail.com',
        password: '123',
    }

    it('should submit the form', () => {
        //dorim sa testam functionalitatea formului
        //vom targeta fiecare input si vom scrie ceva in el
        //dupa care vom apasa butonul submit
        const stub = cy.stub()  
        cy.on ('window:alert', stub)
        cy.visit(url)
        .get('[cy="register-form"]')
        Object.keys(fields).forEach((key) => {
            cy.get(`input#${key}`)
            .type(fields[key])
        })
        cy.get('select#role')
        .select(2)
        .get('[cy="submit-button"]')
        .click()
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Hello!')      
          })  
    })
})