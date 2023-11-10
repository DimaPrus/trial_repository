import { activitiesPage } from "../support/page_objects/activities"

describe('Member App E2E flow', () => {
    beforeEach(()=> {
        cy.userLoginMyStrengthEU('dmytro.wellness39@teladoc.com', 'Test123456')
    })
    it('Activity page check', () => {
        activitiesPage.activitySearch('Boundary Visual')
    })
    it('Activity pathing', () => {
        activitiesPage.pathTheActivity()
    })
    it('Add activity to favourites', () => {
        activitiesPage.addActivityToFavourites()
    })
    it('Skip the activity', () => {
        activitiesPage.skipTheActivity()
    })
})