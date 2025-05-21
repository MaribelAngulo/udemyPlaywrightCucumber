const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { MenuPage } = require('../page-objects/menu-page')

const menuPage = new MenuPage()

When('I click on the hamburger menu', async function () {
  await menuPage.clickOnHamburgerMenu()
})

Then('I click on the logout button', async function () {
  await menuPage.clickOnLogoutButton()
})

Then('I see the login page', async function () {
  await menuPage.assertUserIsLoggedOut()
})