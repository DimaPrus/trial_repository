import { PlayedGames } from "../../support/PageObjects/PlayedGamesPage";

let playedGames;
playedGames = new PlayedGames();

describe('Test suite', () => {

    beforeEach(() => {
        // cy.visit('https://www.xboxachievements.com/');
        // cy.get('.login__btn').first().click();
        // // @ts-ignore
        // cy.get('input[type="text"]').last().type('edmadd1ct');
        // cy.get('input[type="password"]').last().type('d1m14lovetrancemusic');
        // cy.get('#elSignIn_submit').click();
        playedGames.playedGamesNavigation();
    });


    it('Verify overall games progress with JQuery method', () => {
        playedGames.logGameAndProgressInfo();
    });

    it.only('Get list of LOCKED achievements', () => {
        let arr = ['Dead Space'];

        arr.forEach(element => {
            playedGames.getLockedAchievementsForGame(element);
            cy.go('back');
        });
    });
});