class AutoCompletePage {
    colorInputField = () => cy.get('#autoCompleteSingleContainer');


    autoCompleteNavigation() {
        cy.visit('/auto-complete');
    }

    selectColor(letter) {
        this.colorInputField().type(letter);
        cy.get('.auto-complete__menu div').each(($color, index) => {
            cy.log($color.text());
            const colorName = $color.text();
            const selectedColor = index;
            if (colorName == selectedColor) {
                cy.wrap($color).click();
            }
        });
    }

    selectColorWithEnter(letter) {
        this.colorInputField().type(letter);
    }
}

export default AutoCompletePage;