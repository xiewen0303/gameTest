var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var map;
(function (map) {
    var MapCtl = (function () {
        function MapCtl() {
        }
        MapCtl.initMap = function (displayObject, mapFightObject, moveItemLayer) {
            var mapBagObject = displayObject.getChildByName("items");
            var mapManager = Stores.getMapManager();
            //设置格子背景场景
            mapManager.setMapContainer(mapFightObject);
            //设置战斗背包格子场景
            mapManager.setFightBagContainer(mapBagObject);
            //设置战斗场景
            mapManager.setFightScane(displayObject);
            //设置滑动需要的背景
            mapManager.setMoveItemLayer(moveItemLayer);
            Services.getMapService().initMap();
        };
        return MapCtl;
    }());
    map.MapCtl = MapCtl;
    __reflect(MapCtl.prototype, "map.MapCtl");
})(map || (map = {}));
//# sourceMappingURL=MapCtl.js.map