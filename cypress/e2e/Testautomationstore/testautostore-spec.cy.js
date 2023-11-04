/// <reference types='Cypress' />
describe('TestAutomationStore suite', () => {
        before(function() {
                cy.fixture('userDetails').as('user')
        })
        it('Form submission test', () => {
                cy.visit('/');
                cy.get('.info_links_footer').contains('Contact Us').click().then((linkText) => {
                        console.log('The link text is: ' + linkText.text())
                });

                // Using alias in fixtures
                cy.get('@user').then(function(data) {
                        cy.get('#ContactUsFrm_first_name').type(data.first_name);
                        cy.get('#ContactUsFrm_email').type(data.email);
                })
                cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
                cy.get('#ContactUsFrm_enquiry').type('Any comment');
                cy.get('button[title="Submit"]').click();
                cy.get('.contentpanel').find('p').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        });
        it('Click on the first item', () => {
                cy.visit('/')
                cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
        })

        it('Click on the item by contains', () => {
                cy.visit('/')
                cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
        })
        it('Click on the item by index', () => {
                cy.visit('/')
                cy.get('#block_frame_featured_1769').find('.prdocutname').eq(1).click()
                cy.log('All is done!')
        })
});