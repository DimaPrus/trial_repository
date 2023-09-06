describe('Finding Elements', () => {
    it('Find tools and settings label', () => {
        cy.visit('https://app-intltest.mystrength.me/v/')
        // cy.contains('.section-heading section-tools').find('[data-test="vnext.homepage.sections.tools.header"]').should('contain', 'Tools & Settings')
    })

    it('Airlines date picker test', () => {
        cy.visit('https://tickets.ua/en');
        cy.get('.search-form-avia-trip__inner').find('.t-date-picker__inner', 'button').then(button => {
            cy.wrap(button).should('contain', 'Depart').click()
            cy.get('.t-calendar__month').find('.t-calendar__month__week__day__button').contains('15').click()
            cy.get('[type="button"]').contains('One-Way').click()
            cy.wrap(button).invoke('prop', 'outerText').should('contain', '15.09.2022')
        })
    })

    it('Invoke tests', () => {
        cy.visit('https://tickets.ua/en')
        cy.get('[href="https://ttnbtm.com/en/business_travel"]').invoke('text').then(textValue => cy.log(textValue))
    })

    it('Invoke tests', () => {
        cy.visit('https://tickets.ua/en')
        cy.get('[href="https://ttnbtm.com/en/business_travel"]').first().should('contain', 'For corporate clients').invoke('removeAttr', 'target').click()
    })

    it('Rozetka-each test', () => {
        cy.visit('https://rozetka.com.ua/ua/computers-notebooks/c80253/')
        cy.get('rz-widget-list').find('li').eq(2).click().wait(4000)
        cy.get('rz-grid').find('li').each((screenItem, index, list) => {
            const productItem = screenItem.find('app-goods-tile-default').text()
            if (productItem.includes('Asus')) {
                cy.wrap(screenItem).find('app-buy-button').click()
            }
        })
    })
    it('Book club', () => {
        cy.visit('https://bookclub.ua/')
        cy.get('[class="menulist"]').find('[class="gmenu gm1"]').should('contain', 'Художні').click()
    })

    it('Rozetka home page', () => {
        cy.visit('https://rozetka.com.ua/')
        cy.get('rz-main-page-sidebar').then(sideBar => {
            const computersAndNotebooks = sideBar.find('[href="https://rozetka.com.ua/ua/computers-notebooks/c80253/"]').text()
            const gamersItems = sideBar.find('[href="https://rozetka.com.ua/ua/game-zone/c80261/"]')
            expect(computersAndNotebooks).to.equal("Ноутбуки та комп’ютери")
            cy.wrap(sideBar).get(gamersItems).click()
            cy.get('[class="top-widget__categories-list"]').find('[class="popular-category__title"]').contains('Ігрові приставки PlayStation').click()
        })
    })
    // basic .cy text assertion
    it('Book club find text test', () => {
        cy.visit('https://bookclub.ua/')
        cy.get('[href="/catalog/books/thriller_horror_books/"]').should('contain', 'Трилери')
    })
    // .then method text assertion
    it('Book club find text test', () => {
        cy.visit('https://bookclub.ua/')
        cy.get('[href="/catalog/books/thriller_horror_books/"]').last().then(textInput => {
            expect(textInput.text()).to.equal('Трилери')
        })
    })
    // .invoke cy method for the text assertion
    it('Book club find text test', () => {
        cy.visit('https://bookclub.ua/')
        cy.get('[href="/catalog/books/fantastic_books/"]').last().invoke('text').then(textInput => {
            expect(textInput).to.equal('Фантастика')
        })
    })
    it('Booking comb, selected date assertion', () => {
        cy.visit('https://www.expedia.com/Hotels')
        cy.get('#date_form_field-btn').then(datePickerTest => {
            cy.wrap(datePickerTest).click()
            cy.get('[class="uitk-calendar"]').find('[data-day="10"]').first().click()
            cy.get('[data-stid="apply-date-picker"]').click()
            cy.wrap(datePickerTest).invoke('text').should('contain', 'Nov 10')
        })
    })
    it('Cypress invoke test)', () => {
        cy.visit('https://learn.cypress.io/')
        cy.get('[data-test="courses-dropdown"]')
            .invoke('attr', 'aria-expanded')
            .should('eq', 'false')

        cy.get('[data-test="courses-dropdown"]')
            .click()
            .invoke('attr', 'aria-expanded')
            .should('eq', 'true')
    })

    it('Intltest radio buttons test', () => {
        cy.visit('https://app-intltest.mystrength.me/login/')
        cy.get('[translate="login.create"]').click()
        cy.get('#accesscode').type('acwellness1').wait(2000)
        cy.get('#welcome_signup_submit').click()
        cy.get('[class="inline-form-fields"]').then(radioButton => {
            cy.wrap(radioButton).find('#signup_male')
                .check()
                .should('be.checked')

            cy.wrap(radioButton).find('[type="radio"]')
                .eq(1)
                .check()

            cy.wrap(radioButton).find('[type="radio"]')
                .first()
                .should('not.be.checked')
        })
    })
    it('Checkboxes test', () => {
        cy.visit('https://app-intltest.mystrength.me/login/')
        cy.get('[translate="login.create"]').click()
        cy.get('#accesscode').type('acwellness1').wait(2000)
        cy.get('#welcome_signup_submit').click()
        cy.get('[class="tos-container-top ng-scope"]').then(checkBoxes => {
            cy.wrap(checkBoxes).find('[type="checkbox"]')
                .should('have.length', 3)
                .eq(2)
                .check({ force: true })
        })
    })
    it('Lists and Dropdown', () => {
        cy.visit('https://prom.ua/ua/consumer-goods')
        cy.get('[class="ek-body__section ek-body__section_height_1-1"]').find('[class="M3v0L NFHn0"]').contains('Каталог товарів').click()
        cy.get('[class="nujFR"]').contains("Краса та здоров'я").click()
        cy.get('[class="M3v0L YKUY6"]').first().should('have.css', 'background-color', 'rgb(193, 193, 212)')
    })
    it('Select all values from the dropdown by "select"', () => {
        cy.visit('https://dou.ua/lenta/')
        cy.get('select').as('dropDown')
        cy.get('@dropDown').get('option').each(optionItem => {
            cy.get('@dropDown').select(optionItem.text())
            // cy.url().should('eq', optionItem.val())
        })
    })
    it('Select all values from the dropdown', () => {
        cy.visit('https://dou.ua/forums/')
        cy.get('[name="topic"]').as('valuesDropdown')
        cy.get('@valuesDropdown').get('option').each(dropDownOptions => {
            console.log(dropDownOptions.text())
            cy.get('@valuesDropdown').select(dropDownOptions.text())

        })
    })
    it('Wiki dropdown languages', () => {
        cy.visit('https://www.wikipedia.org/')
        cy.get('#www-wikipedia-org').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get('#searchLanguage').find('option').each(dropDownLanguage => {
            cy.get('#searchLanguage').select(dropDownLanguage.text())
        })
    })
    it('Dropdown then method', () => {
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchLanguage').then( dropDown => {
            cy.get('option').each( listItem => {
                cy.get('#searchLanguage').select(listItem.text())
            })
        })
    })
    /*it.only('Datepicker test', () => {
        cy.visit('https://avia.tickets.ua/en')
        cy.get('[class="t-date-picker__placeholder"]').first().click()
        cy.get('[class="t-calendar__month-label"]').last().should('have.text', 'December 2022').then( dayOfTheMonth => {
            cy.wrap(dayOfTheMonth).find('[class="t-calendar__month__week__day__button theme-default"]').should('have.text', '30').click()
        })
        
    })*/
    it.only('Tooltips', () => {
        cy.visit('https://appv2-intltest.mystrength.me/login')
        cy.get('[class="link-highlight"]').contains('Create a new account').click()
        cy.get('#accesscode').type('acwellness1').wait(2000)
        cy.get('#welcome_signup_submit').click()
        cy.get('[class="info-toggle"]').first().click()
        cy.get('[translate="onboarding.account.alias.title"]').should('contain', 'Screen Name')
    })

})