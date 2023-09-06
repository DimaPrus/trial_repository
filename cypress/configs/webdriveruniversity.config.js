const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio:true, 
    execTimeout:10000,
    pageLoadTimeout:15000,
    responseTimeout:15000,
    viewportWidth:1600,
    viewportHeight:1000,
    baseUrl: 'http://www.webdriveruniversity.com/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['cypress/e2e/Demoqa', 'cypress/e2e/Testautomationstore', 'cypress/e2e/Mystrength'], 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});