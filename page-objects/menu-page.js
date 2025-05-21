class MenuPage {

  async clickOnHamburgerMenu() {
    await page.click('#react-burger-menu-btn')
  }

  async clickOnLogoutButton() {
    await page.waitForSelector('a#logout_sidebar_link')
    await page.click('a#logout_sidebar_link')
  }

  async assertUserIsLoggedOut() {
    await page.waitForSelector('.login_logo')
  }
  
}

module.exports = { MenuPage }
