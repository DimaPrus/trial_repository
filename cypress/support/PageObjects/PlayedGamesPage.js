export class PlayedGames {
    playedGamesPage = () => cy.get('a').contains('Played Games');
    showProfileInfo = () => cy.get('h5').contains('edmadd1ct');
    gameTitles = () => cy.get('.achilist__title');
    gamePercentageProgress = () => cy.get('.is-active');
    lockedAchievements = () => cy.get('.icon-unlock');
    achievementsList = () => cy.get('.achilist__data');


    playedGamesNavigation() {
        cy.visit('/');
        this.showProfileInfo().click();
        this.playedGamesPage().click();
    }

    logGameAndProgressInfo() {
        this.gameTitles().each((game, index) => {
            cy.log(game.text() + ': - ' + Cypress.$('.is-active').eq(index + 1).text());
        });
    }

    getLockedAchievementsForGame(title) {
        let num = 0;
        this.gameTitles().contains(title).click();
        const lockedAchievements = this.lockedAchievements();

        lockedAchievements.each(($lockedAchievements) => {
            const title = $lockedAchievements.closest('.achilist__data').find('.achilist__header').text();
            const achievementDescription = $lockedAchievements.closest('.achilist__data').find('p').text();
            cy.log('Locked achievement: ' + title + ' - ' + achievementDescription);
            num++;
        }).then(() => {
            cy.log('The total number of LOCKED achievements is: ' + num);
        });
    }
}