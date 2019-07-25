System.register(["angular2/core", "./game-item"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, game_item_1;
    var GameService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (game_item_1_1) {
                game_item_1 = game_item_1_1;
            }],
        execute: function() {
            /**
             *
             */
            GameService = (function () {
                function GameService() {
                }
                GameService.prototype.getItems = function (count) {
                    var i = 0;
                    var result = [], item, previousItem = null;
                    while (i < count) {
                        item = new game_item_1.GameItem(i, "" + (i + 1));
                        if (previousItem) {
                            previousItem.next = item;
                            item.previous = previousItem;
                        }
                        previousItem = item;
                        result.push(item);
                        i++;
                    }
                    previousItem.next = result[0];
                    result[0].previous = previousItem;
                    return Promise.resolve(result);
                };
                GameService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], GameService);
                return GameService;
            })();
            exports_1("GameService", GameService);
        }
    }
});
//# sourceMappingURL=game.service.js.map