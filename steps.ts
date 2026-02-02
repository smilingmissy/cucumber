 import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser, $ } from '@wdio/globals'
    
Given(/^I am on the login page$/, async () => {
    await browser.url('https://practice.expandtesting.com/login');
});
When(/^user enters with right  username and password$/, async () => {
     await $('#username').setValue('practice')
     await $('#password').setValue('SuperSecretPassword!')
     await $('button[type="submit"]').click()
});
Then(/^user should be redirected to secure page$/, async () => {
             await expect(browser).toHaveUrl(expect.stringContaining('/secure'));
});

Given(/^user is on secure page$/, async () => {
    await browser.url('https://practice.expandtesting.com/secure');
});
When(/^user clicks on logout$/, async () => {
    const logoutBtn = await $('a[href="/logout"]');
    await logoutBtn.click();
});
Then(/^user should be redirected to login page$/, async () => {
   await expect(browser).toHaveUrl('https://practice.expandtesting.com/login');
});

When(/^user enters wrong username and password$/, async () => {
     await $('#username').setValue('toms')
     await $('#password').setValue('oops!')
     await $('button[type="submit"]').click()
});
Then(/^user should see an flash error message$/, async () => {
    const flash = await $('#flash');
    await  expect(flash).toHaveText(expect.stringContaining('Your username is invalid!'));
});

    



