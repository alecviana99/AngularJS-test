System.register(['angular2/core', "./game.service", "angular2/common"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, game_service_1, common_1;
    var GameComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (game_service_1_1) {
                game_service_1 = game_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            GameComponent = (function () {
                function GameComponent(_gameService) {
                    this._gameService = _gameService;
                    this.title = 'AngularJS Gaming';
                    this.noOfPlayer = 100;
                    this.done = false;
                    this.deadItems = [];
                }
                GameComponent.prototype.nextTurn = function (head, skip) {
                    this.deadItems.push(head);
                    head.dead = true;
                    head.previous.next = head.next;
                    head.next.previous = head.previous;
                    var counter = 0;
                    head = head.next;
                    while (counter < skip) {
                        head = head.next;
                        counter++;
                    }
                    return head;
                };
                GameComponent.prototype.play = function () {
                    var _this = this;
                    var index = -1;
                    var skip = 1;
                    var items = this.origin;
                    var survivalCount = items.length;
                    var temp = items.length;
                    var head = this.origin[0];
                    var interval = setInterval(function () {
                        if (head.next != head && survivalCount > 1) {
                            head = _this.nextTurn(head, skip);
                            index += skip;
                            skip++;
                            survivalCount--;
                            if (skip + index > temp + survivalCount) {
                                temp = temp + survivalCount;
                            }
                            console.log("SurvivalCount: " + survivalCount + " Index: " + index + " Skip: " + skip);
                        }
                        else {
                            clearInterval(interval);
                            _this.done = true;
                        }
                    }, 100);
                };
                GameComponent.prototype.start = function () {
                    var _this = this;
                    this.done = false;
                    this._gameService.getItems(this.noOfPlayer > 0 ? this.noOfPlayer : 100).then(function (items) {
                        _this.origin = items;
                        _this.play();
                    });
                };
                GameComponent = __decorate([
                    core_1.Component({
                        selector: 'game',
                        providers: [game_service_1.GameService],
                        directives: [common_1.NgClass],
                        templateUrl: 'app/game.component.html'
                    }), 
                    __metadata('design:paramtypes', [game_service_1.GameService])
                ], GameComponent);
                return GameComponent;
            })();
            exports_1("GameComponent", GameComponent);
        }
    }
});
//# sourceMappingURL=game.component.js.map