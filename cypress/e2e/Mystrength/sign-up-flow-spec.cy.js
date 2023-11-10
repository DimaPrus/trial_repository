describe('Regular sign-ups', () =>{
    it('user registers with Wellness AC', () => {
        cy.visit('/')
        cy.get('[translate="login.create"]').click()
        cy.get('#accesscode').type('acwellness1').wait(3000)
        cy.get('#welcome_signup_submit').click()
        cy.get('#signup_firstname').type('Dima')
        cy.get('#signup_alias').type('dprus')
        cy.get('#signup_email').type('dmytro.cypress-test-sign-up19@teladoc.com')
        cy.get('#signup_password').type('Test123456')
        cy.get('#signup_select_language').select('English (United States)')
        cy.get('#dob-month').select('August').get('#dob-year').type('1992')
        cy.get('#signup_male').click()
        cy.get('#signup_checkbox-age').check({force:true}).should('be.checked')
        cy.get('#PRIVACY_POLICY').check({force:true}).should('be.checked')
        cy.get('#TERMS_AND_CONDITIONS').check({force:true}).should('be.checked')
        cy.get('#signup_submit').click().wait(4000)
        cy.get('#lifesGood').check({force:true})
        cy.get('[name="condition:depression"]').check({force:true})
        cy.get('[ng-click="vm.setAnswers(vm.answers)"]').click().wait(3000)
        for (let index = 1; index <= 4; index++){
            cy.log(index)
            cy.get('#mood-icon-4').click().wait(1000)
        }
        cy.get('.success').click().wait(3000)
        cy.get('#signup_submit').click()
        for (let index = 1; index <=5; index++){
            cy.log(index)
            cy.get('#assessment_btn_5').click().wait(2000)
        }
        cy.get('[ng-model="vm.previousAnswer"]').select('Amazing app')
        cy.get('#wpai_submit').click()
        cy.get('[ng-model="vm.previousAnswer"]').select('Yes')
        cy.get('#wpai_submit').click().wait(3000)
        cy.get('#signup_submit').click()
        cy.get('[type="submit"]').click()


        //cy.select('[label="English (United States)"]').click()
    })
})