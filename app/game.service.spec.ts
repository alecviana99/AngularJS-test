import {GameService} from "./game.service";

/**
 * Created by alexei on 3/17/16.
 */
describe('GetItems', () => {
    it('Should return an array with length as given', () => {
        var service = new GameService();
        var result;

        service.getItems(3).then(items => {
            result = items;

            expect(result.length).toBe(3);
        });
    });
});