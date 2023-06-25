Feature('Like Unlike Restaurant');

Before((I) => {
    I.amOnPage('/');
});

Scenario('Suka dan Batal Suka', (I) => {
    I.see('Explore Restaurant', 'h1');
    I.seeElement('.list_item_title a');
    I.click(locate('.list_item_title a').first());
    I.seeElement('#likeButton');
    I.click("#likeButton");
    I.amOnPage('/#/favorite');
    I.seeElement('.restaurant-item');
    I.seeElement('.restaurant-item__title a');
    I.click(locate('.restaurant-item__title a').first());
    I.seeElement('#likedButton');
    I.click("#likedButton");
    I.amOnPage('/#/favorite');
    I.seeElement('.no-favorite-restaurants');
});
