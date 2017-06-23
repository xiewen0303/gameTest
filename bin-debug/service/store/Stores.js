var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var store;
(function (store) {
    var Stores = (function () {
        function Stores() {
        }
        Stores.getFrameManager = function () {
            return Stores.frameManager;
        };
        Stores.getMapManager = function () {
            return Stores.mapManager;
        };
        return Stores;
    }());
    Stores.frameManager = new frame.FrameManager();
    Stores.mapManager = new map.MapManager();
    store.Stores = Stores;
    __reflect(Stores.prototype, "store.Stores");
})(store || (store = {}));
//# sourceMappingURL=Stores.js.map