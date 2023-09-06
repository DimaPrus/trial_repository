function beginTheActivity(activityName){
  cy.get('[translate="vnext.sidebar.activities"]').click();
    cy.get('[class="section-heading ms-padding-12"]').find('h2').eq(0).should('have.text', 'Focus Areas')
    cy.get('[class="ms-card-container layout-wrap layout-row"] h3').contains(activityName).should('have.length', 1).click()
    cy.get('[class="card-content"]').find('h3').eq(0).click().wait(2000)
    cy.get('[class="cta"]').click().wait(4000)
}
//import cypress from "cypress"
class activities {
  // 1 Test
  activitySearch(search) {
    cy.get('[translate="vnext.sidebar.activities"]').click();
    cy.get('[class="search"]')
      .type(search)
      .find("#searchbar")
      .click()
      .then((searchResult) => {
        cy.wrap(searchResult.text())
          .get('[class="card-content"]')
          .find("h3")
          .should("have.text", search);
      });
  }
  // 2 Test
  pathTheActivity() {
    beginTheActivity('Managing depression')
    cy.get('[class="count ng-scope"]').invoke('text').then(stepCount => {
      const totalSteps = stepCount.replace('Step 1 / ', '');
      cy.log(totalSteps)
      for (let index = 1; index <= totalSteps; index++) {
        cy.log(index)
        if (totalSteps == 1 || index == totalSteps) {
          cy.get('spinner-button').click({ force: true })
        } else {
          cy.get('ms-widget-button-next-button [class="btn"]').click({ force: true });
        }
      }
      cy.get('[data-test="vnext.activity.feedback.completeButton"]').click()
    })
  }
  // 3 Test
  addActivityToFavourites() {
    beginTheActivity('Managing depression')

    cy.get('[class="activity-header ng-scope"]').find('h1').invoke('text').then(activityTitle => {
      cy.get('[class="favorite-btn"]').click()
      cy.get('[icon-id="starfavorite"]').invoke('attr', 'class').should('eq', 'yep')
      cy.get('[icon-id="heart"]').click()
      cy.get('[class="card-container ng-scope"] [class="card-content"] span').contains(activityTitle).should('have.length', 1)
    })
  }
  // 4 Test
  skipTheActivity(){
    beginTheActivity('Controlling Anxiety')
    
  }
}

export const activitiesPage = new activities();
