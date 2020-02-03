describe('Login Flow Test', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have Login screen', async () => {
    await expect(element(by.id('loginView'))).toBeVisible();
    await expect(element(by.id('hackages_logo'))).toBeVisible();
    await expect(element(by.id('carousel'))).toBeVisible();
    await expect(element(by.id('login_button'))).toBeVisible();
  });

  it('Should display home revenues screen after tap', async () => {
    await element(element(by.id('login_button'))).tap();
    await expect(element(by.id('home_revenues'))).toBeVisible();
  });
});
