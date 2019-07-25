System.register([], function(exports_1) {
    var GameItem;
    return {
        setters:[],
        execute: function() {
            GameItem = (function () {
                function GameItem(index, title) {
                    this.index = index;
                    this.title = title;
                    this.dead = false;
                }
                return GameItem;
            })();
            exports_1("GameItem", GameItem);
        }
    }
});
//# sourceMappingURL=game-item.js.map