Feature('Add New Review');

Before(({ I }) => {
    I.amOnPage('/');
});

// create add review test
Scenario('Add new review to first restaurant', ({ I }) => {
    I.seeElement('.card-title a');
    I.click(locate('.card-title a').first());
    I.seeElement('.detail-review-container');
    I.fillField('nama', 'kuncoro');
    I.fillField('content', 'try e2e testing');
    I.click('.submit-btn');
    I.see('kuncoro', '.review-name');
    I.see('try e2e testing', '.review-body');
});
