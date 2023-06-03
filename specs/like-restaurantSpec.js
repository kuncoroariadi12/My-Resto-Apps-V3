import favoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import * as testFactories from './helper/test-factories';

describe('Liking A Restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(() => {
        addLikeButtonContainer();
    });

    it('should show the like button when the restaurant has not been liked before', async () => {
        await testFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
    });

    it('should not show the unlike button when the restaurant has not been liked before', async () => {
        await testFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
    });

    it('should be able to like the restaurant', async () => {
        await testFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const resto = await favoriteRestoIdb.getResto(1);
        expect(resto).toEqual({ id: 1 });
        favoriteRestoIdb.deleteResto(1);
    });

    it('should not add a restaurant again when its already liked', async () => {
        await testFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        await favoriteRestoIdb.putResto({ id: 1 });
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await favoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }]);
        favoriteRestoIdb.deleteResto(1);
    });

    it('should not add a restaurant when it has no id', async () => {
        await testFactories.createLikeButtonPresenterWithRestaurant({});

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await favoriteRestoIdb.getAllResto()).toEqual([]);
    });
});
