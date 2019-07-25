System.register(["./game.service"], function(exports_1) {
    var game_service_1;
    return {
        setters:[
            function (game_service_1_1) {
                game_service_1 = game_service_1_1;
            }],
        execute: function() {
            /**
             * Created by alexei on 3/17/16.
             */
            describe('GetItems', function () {
                it('Should return an array with length as given', function () {
                    var service = new game_service_1.GameService();
                    var result;
                    service.getItems(3).then(function (items) {
                        result = items;
                        expect(result.length).toBe(3);
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=game.service.spec.js.map