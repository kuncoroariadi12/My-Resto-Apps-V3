const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
    I.seeElement('.empty-container');
    I.see("You haven't add a favorite restaurant yet...", '.empty-text');
});

Scenario('like and unlike for first restaurant', async ({ I }) => {
    I.see("You haven't add a favorite restaurant yet...", '.empty-text');
    I.amOnPage('/');

    // like 1st resto
    I.wait(2);
    I.seeElement('.card-title a');
    I.click(locate('.card-title a').first());
    I.wait(2);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorite');
    I.seeElement('.card');

    const firstRestoTitle = await I.grabTextFrom(locate('.card-title a').first());
    const likedRestoTitle = await I.grabTextFrom('.card-title a');
    assert.strictEqual(likedRestoTitle, firstRestoTitle);

    // unlike 1st resto
    I.wait(2);
    I.click(locate('.card-title a').first());
    I.wait(2);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorite');
    I.seeElement('.empty-container');
    I.see("You haven't add a favorite restaurant yet...", '.empty-text');
});
