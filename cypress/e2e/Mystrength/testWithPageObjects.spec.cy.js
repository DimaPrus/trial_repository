import { signUpFlow } from "../support/page_objects/signUp"

describe('Test with Page Objects', () => {
   beforeEach('visit Intltest', () => {
    cy.visit('/')
   })

   it('Navigate to the Signup page', () =>{
      signUpFlow.signUpNavigation()
      signUpFlow.selectLangAndGender()
   })
})